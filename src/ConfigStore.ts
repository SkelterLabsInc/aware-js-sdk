import Cookies from 'universal-cookie'
import uuid from 'uuid/v4'

const KEY_PROJECT_ID = 'PROJECT_ID'
const KEY_APP_ID = 'APP_ID'
const KEY_API_KEY = 'API_KEY'
// TODO(arthury): Host URL should not be given from client. It should be extracted from browser.
const KEY_HOSTNAME = 'HOSTNAME'
const KEY_AUTH_TOKEN = 'AUTH_TOKEN'
const KEY_UID = 'UID'
const KEY_IID = 'IID'

const cookies = new Cookies()

interface User {
  irisAuthToken: string
  uid: string
}

// TODO(arthury): Consider to use options of `Cookies.set` and `Cookies.remove`.
//   See more details: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie
//   See also: https://www.npmjs.com/package/cookie
/**
 * ConfigStore stores all configs of AIQ.AWARE SDK.
 */
export default class ConfigStore {
  constructor (projectId: string, appId: string, apiKey: string, hostname: string) {
    cookies.set(KEY_PROJECT_ID, projectId)
    cookies.set(KEY_APP_ID, appId)
    cookies.set(KEY_API_KEY, apiKey)
    cookies.set(KEY_HOSTNAME, hostname)
  }

  /**
   * Get current `auth token`.
   * If the auth token does not exist, return empty string.
   *
   * @returns Authorization token of AIQ.AWARE
   */
  get authToken (): string {
    return cookies.get(KEY_AUTH_TOKEN) || ''
  }

  get projectId (): string {
    return cookies.get(KEY_PROJECT_ID)
  }


  get appId (): string {
    return cookies.get(KEY_APP_ID)
  }

  get apiKey (): string {
    return cookies.get(KEY_API_KEY)
  }

  get hostname (): string {
    return cookies.get(KEY_HOSTNAME)
  }

  /**
   * Get `uid` of current user.
   * If the uid does not exist, return empty string.
   *
   * @returns User ID of AIQ.AWARE
   */
  get uid (): string {
    return cookies.get(KEY_UID) || ''
  }

  /**
   * Get `iid` of current site.
   * If the iid does not exists, generate new IID for this site.
   *
   * @returns IID of this site.
   */
  get iid (): string {
    const iid = cookies.get(KEY_IID) || ''
    if (iid.length > 0) {
      return iid
    }
    const newIid = `j-${uuid().replace(/-/g, '')}`
    cookies.set(KEY_IID, newIid)
    return newIid
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
