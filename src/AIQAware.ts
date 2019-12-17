import * as Bowser from 'bowser'
import _ from 'lodash'
import { from, of } from 'rxjs'
import { flatMap, map, mapTo } from 'rxjs/operators'

import ConfigStore from './ConfigStore'
import { structured } from './model/structured.pb'
import Client, { Device } from './network/Client'

const bowser = Bowser.getParser(window.navigator.userAgent)

const { StructuredData } = structured

// TODO(arthury): After server support `js` type, change to `js`.
const APP_TYPE = 'android'
// TODO(arthury): Get version number from `package.json`.
//   It is not possible to read directly from package.json, because it is not
//   allowed to read outside of `src` (root) directory.
const version = '0.2.0'

// TODO(arthury): Test and handle errors when requesting.
export default class AIQAware {
  private configStore: ConfigStore
  private client = new Client()

  // TODO(arthury): Load configs from file directly.
  constructor (projectId: string, appId: string, apiKey: string, hostname: string) {
    this.configStore = new ConfigStore(projectId, appId, apiKey, hostname)
  }

  private get currentDevice (): Device {
    return {
      iid: this.configStore.iid,
      sdkVersion: version,
      osVersion: bowser.getOSVersion(),
      deviceModel: bowser.getBrowserName(),
      updatedTimestamp: Date.now()
    }
  }

  get registered (): boolean {
    return this.configStore.authToken.length > 0 && this.configStore.uid.length > 0
  }

  // TODO(arthury): Add `userHint` as a parameter.
  async register (): Promise<string> {
    if (this.registered) {
      return Promise.resolve(this.configStore.authToken)
    }
    return of(this.currentDevice)
      .pipe(
        map(device => ({
          // TODO(arthury): TimeZone from browser.
          timeZone: 'Asia/Seoul',
          devices: [device]
        })),
        flatMap(user => from(this.client.register(user, {
          projectId: this.configStore.projectId,
          appId: this.configStore.appId,
          appType: APP_TYPE,
          // TODO(arthury): After support domain, use window.location.hostname
          androidPackageName: this.configStore.hostname,
          iid: this.configStore.iid,
          clientSecret: this.configStore.apiKey,
          // TODO(arthury): Extract language and country code from browser.
          lang: 'ko',
          country: 'KR'
        }))),
        map(user => {
          this.configStore.saveUserConfigs(user)
          return this.configStore.authToken
        })
      )
      .toPromise()
  }

  async unregister (): Promise<null> {
    if (!this.registered) {
      return Promise.resolve(null)
    }
    return of(this.currentDevice)
      .pipe(
        flatMap(() => from(this.client.unregister(this.configStore.uid, {
          token: this.configStore.authToken
        }))),
        map(() => {
          this.configStore.clearUserConfigs()
          return null
        })
      )
      .toPromise()
  }

  // TODO(arthury): Add `reregister` function which is private and will be called when
  //  server returns UNAUTHORIZED status code.

  async postCustomSignal (
    type: structured.StructuredData.FieldType,
    name: string,
    value: any,
    key?: string
  ): Promise<null> {
      if (type == StructuredData.FieldType.FIELD_TYPE_NONE) {
        return Promise.reject(new Error('Invalid field type'))
      }

      if (!this.registered) {
        return Promise.reject(new Error('SDK is not registered.'))
      }

      const field: structured.StructuredData.IField = {}
      if (key) {
        field.key = key
      }
      if (_.isBoolean(value)) {
        field.boolValue = value
      } else if (_.isFinite(value)) {
        if (value % 1 === 0) {
          field.intValue = value
        } else {
          field.doubleValue = value
        }
      } else {
        field.stringValue = value
      }

      const message: structured.IStructuredData = {
        name,
        timestamp: Date.now(),
        timeZone: 'Asia/Seoul',
        fieldType: type,
        fields: [field]
      }

      return of(StructuredData.create(message))
        .pipe(
          map(custom => ({
            signals: [{ custom }]
          })),
          flatMap(signals => from(this.client.postCustomSignal(signals, {
            iid: this.configStore.iid,
            token: this.configStore.authToken
          }))),
          mapTo(null),
        )
        .toPromise()
  }
}
