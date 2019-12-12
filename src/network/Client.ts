import createError from 'http-errors'
import _ from 'lodash'
import qs from 'qs'

const BASE_URL = 'https://aware.skelterlabs.com/sdk/v1'

export interface Device {
  iid: string
  sdkVersion: string // sdk version
  osVersion: string
  deviceModel: string // browser?
  updatedTimestamp: number
  fcmToken?: string
}

export interface User {
  timeZone: string
  devices: Device[]
  clientUserHint?: string
}

interface UserResponse extends User {
  irisAuthToken: string
  uid: string
}

interface EmptyResponse {
  // Nothing
}

interface StudioQuery {
  useStudio?: string
}

interface CommonQuery extends StudioQuery {
  token: string
}

interface PostUserQuery extends StudioQuery {
  projectId: string
  appId: string
  appType: string
  // TODO(arthury): Change to hostname
  androidPackageName: string
  iid: string
  clientSecret: string
  lang: string
  country: string
}

/**
 * Set `useStudio` field to the given query as `true` string value.
 */
function useStudio (query: StudioQuery): StudioQuery {
  query.useStudio = 'true'
  return query
}

/**
 * This is utility function to converting cases of all nested fields with the given conversion
 * function.
 *
 * @param target Target object to convert field cases
 * @param convert Function to be used for field name conversion.
 */
function convertCaseDeep (target: any, convert: Function): object {
  return _.chain(target)
    .mapKeys((value, key) => convert(key))
    .mapValues(value => {
      if (_.isObject(value)) {
        return convertCaseDeep(value, convert)
      }
      return value
    })
    .value()
}

function toSnakeDeep (target: object): object {
  return convertCaseDeep(target, _.snakeCase)
}

function toCamelDeep (target: object): object {
  return convertCaseDeep(target, _.camelCase)
}

function toSnakeQueryString (query: object): string {
  return qs.stringify(toSnakeDeep(query))
}

async function handleJsonResponse (response: Response) {
  const json = await response.json()
  if (response.status >= 400) {
    throw createError(response.status, response.statusText, { response })
  }
  return toCamelDeep(json)
}

// TODO(arthury): Server should send any response.
async function handleEmptyResponse (response: Response) {
  if (response.status >= 400) {
    throw createError(response.status, response.statusText, { response })
  }
  return {}
}

// TODO(arthury): Split by resources if more methods are added.
export default class Client {
  async register (body: User, query: PostUserQuery): Promise<UserResponse> {
    const url = `${BASE_URL}/users?${toSnakeQueryString(useStudio(query))}`
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    return fetch(url, options).then(handleJsonResponse) as Promise<UserResponse>
  }

  async unregister (uid: string, query: CommonQuery): Promise<EmptyResponse> {
    const url = `${BASE_URL}/users/${uid}/logout?${toSnakeQueryString(useStudio(query))}`
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify({})
    }
    return fetch(url, options).then(handleEmptyResponse) as Promise<EmptyResponse>
  }
}
