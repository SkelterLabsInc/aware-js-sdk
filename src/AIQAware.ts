import ConfigStore from './ConfigStore'

export default class AIQAware {
  private configStore: ConfigStore

  // TODO(arthury): Load configs from file directly.
  constructor (projectId: string, appId: string, apiKey: string) {
    this.configStore = new ConfigStore(projectId, appId, apiKey)
  }

  isRegistered () {
    return this.configStore.getAuthToken().length > 0 && this.configStore.getUid().length > 0
  }

  // TODO(arthury): Add `userHint` as a parameter.
  register () {
    if (this.isRegistered()) {
      return this.configStore.getAuthToken()
    }
    this.configStore.saveUserConfigs({
      irisAuthToken: 'auth-token',
      uid: 'uid'
    })
    return this.configStore.getAuthToken()
  }

  unregister () {
    if (!this.isRegistered()) {
      return
    }
    this.configStore.clearUserConfigs()
  }
}
