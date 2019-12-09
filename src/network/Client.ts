import createError from 'http-errors'
import _ from 'lodash'
import qs from 'qs'

const BASE_URL = 'https://aware.skelterlabs.com/sdk/v1'

interface Device {
  iid: string
  sdk_version: string // sdk version
  os_version: string
  device_model: string // browser?
  updated_timestamp: number
}

export interface User {
  timeZone: string
  devices: Device[]
  clientUserHint?: string
}

export interface UserResponse extends User {
  irisAuthToken: string
  uid: string
}

interface CommonQuery {
  lang: string
  country: string
  useStudio?: string
}

interface PostUserQuery extends CommonQuery {
  projectId: string
  appId: string
  appType: string
  // TODO(arthury): Change to hostname
  androidPackageName: string
  iid: string
  clientSecret: string
}

/**
 * Set `useStudio` field to the given query as `true` string value.
 */
function useStudio (query: CommonQuery): CommonQuery {
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

async function handleResponse (response: Response) {
  const json = await response.json()
  if (response.status >= 400) {
    throw createError(response.status, response.statusText, { response })
  }
  return toCamelDeep(json)
}

// TODO(arthury): Split by resources if more methods are added.
export default class Client {
  async register (
    body: User,
    query: PostUserQuery
  ): Promise<UserResponse> {
    const newQuery = toSnakeDeep(useStudio(query))
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    const url = `${BASE_URL}/users?${qs.stringify(newQuery)}`
    return fetch(url, options).then(handleResponse) as Promise<UserResponse>
  }
}
