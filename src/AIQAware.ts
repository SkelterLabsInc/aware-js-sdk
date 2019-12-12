import * as Bowser from 'bowser'
import { from, of } from 'rxjs'
import { flatMap, map } from 'rxjs/operators'

import ConfigStore from './ConfigStore'
import Client, { Device, User } from './network/Client'

const bowser = Bowser.getParser(window.navigator.userAgent)

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
  constructor (projectId: string, appId: string, apiKey: string) {
    this.configStore = new ConfigStore(projectId, appId, apiKey)
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
        map(device => {
          const user: User = {
            // TODO(arthury): TimeZone from browser.
            timeZone: 'Asia/Seoul',
            devices: [device]
          }
          return user
        }),
        flatMap(user => from(this.client.register(user, {
          projectId: this.configStore.projectId,
          appId: this.configStore.appId,
          appType: APP_TYPE,
          // TODO(arthury): After support domain, use window.location.hostname
          androidPackageName: 'custom-signal.com',
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
}
