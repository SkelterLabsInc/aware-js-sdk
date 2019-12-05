export default class AIQAware {
  private isRegistered: boolean = false

  // TODO(arthury): Add `userHint` as a parameter.
  register() {
    if (this.isRegistered) {
      return 'SDK is already registered. Auth token will be provided.'
    }
    this.isRegistered = true
    return 'SDK is not registered yet. Registering... and auth token will be provided.'
  }
}
