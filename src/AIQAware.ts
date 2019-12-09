import * as Bowser from 'bowser'
import { from, of } from 'rxjs'
import { flatMap, map } from 'rxjs/operators'

import ConfigStore from './ConfigStore'
import Client, { User } from './network/Client'

const bowser = Bowser.getParser(window.navigator.userAgent)

// TODO(arthury): After server support `js` type, change to `js`.
const APP_TYPE = 'android'
// TODO(arthury): Get version number from `package.json`.
//   It is not possible to read directly from package.json, because it is not
//   allowed to read outside of `src` (root) directory.
const version = '0.2.0'

export default class AIQAware {
  private configStore: ConfigStore
  private client = new Client()

  // TODO(arthury): Load configs from file directly.
  constructor (projectId: string, appId: string, apiKey: string) {
    this.configStore = new ConfigStore(projectId, appId, apiKey)
  }

  private makeUser (): User {
    return {
      // TODO(arthury): TimeZone from browser.
      timeZone: 'Asia/Seoul',
      devices: [{
        iid: this.configStore.getIid(),
        sdk_version: version,
        os_version: bowser.getOSVersion(),
        device_model: bowser.getBrowserName(),
        updated_timestamp: Date.now()
      }]
    }
  }

  isRegistered () {
    return this.configStore.getAuthToken().length > 0 && this.configStore.getUid().length > 0
  }

  // TODO(arthury): Add `userHint` as a parameter.
  async register (): Promise<string> {
    if (this.isRegistered()) {
      return this.configStore.getAuthToken()
    }
    return of(this.makeUser())
      .pipe(
        flatMap(user => from(this.client.register(user, {
          projectId: this.configStore.getProjectId(),
          appId: this.configStore.getAppId(),
          appType: APP_TYPE,
          // TODO(arthury): After support domain, use window.location.hostname
          androidPackageName: 'custom-signal.com',
          iid: this.configStore.getIid(),
          clientSecret: this.configStore.getApiKey(),
          // TODO(arthury): Extract language and country code from browser.
          lang: 'ko',
          country: 'KR'
        }))),
        map(user => {
          this.configStore.saveUserConfigs(user)
          return this.configStore.getAuthToken()
        })
      )
      .toPromise()
  }

  unregister () {
    if (!this.isRegistered()) {
      return
    }
    this.configStore.clearUserConfigs()
  }
}
