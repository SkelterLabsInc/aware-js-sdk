import Cookies from 'universal-cookie'

const KEY_PROJECT_ID = 'PROJECT_ID'
const KEY_APP_ID = 'APP_ID'
const KEY_API_KEY = 'API_KEY'
const KEY_AUTH_TOKEN = 'AUTH_TOKEN'
const KEY_UID = 'UID'

const cookies = new Cookies()

interface User {
  irisAuthToken: string
  uid: string
}

/**
 * ConfigStore stores all configs of AIQ.AWARE SDK.
 */
export default class ConfigStore {
  constructor (projectId: string, appId: string, apiKey: string) {
    cookies.set(KEY_PROJECT_ID, projectId)
    cookies.set(KEY_APP_ID, appId)
    cookies.set(KEY_API_KEY, apiKey)
  }

  /**
   * Get current `auth token`.
   * If the auth token does not exist, return empty string.
   *
   * @returns Authorization token of AIQ.AWARE
   */
  getAuthToken (): string {
    return cookies.get(KEY_AUTH_TOKEN) || ''
  }

  /**
   * Get `uid` of current user.
   * If the uid does not exist, return empty string.
   *
   * @returns User ID of AIQ.AWARE
   */
  getUid (): string {
    return cookies.get(KEY_UID) || ''
  }

  /**
   * Save configs of the given user.
   *
   * @param user User data given from the AIQ.AWARE server.
   *   It should contains `irisAuthToken` and `uid` as fields.
   */
  saveUserConfigs (user: User) {
    cookies.set(KEY_AUTH_TOKEN, user.irisAuthToken)
    cookies.set(KEY_UID, user.uid)
  }

  /**
   * Clear configs related to user.
   *
   * Remove `irisAuthToken` and `uid` of the user from the storage.
   */
  clearUserConfigs () {
    cookies.remove(KEY_AUTH_TOKEN)
    cookies.remove(KEY_UID)
  }
}
