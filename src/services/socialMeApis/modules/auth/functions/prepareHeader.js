import Router from 'next/router'
import { getStorage } from 'utils/helpers/sirStorage'
import {
  getCookieName,
  getApiHeaders,
  getAppInformation,
  getParameterName
} from 'utils/helpers/sirVariables'

export default async function prepareHeader() {
  const appKey = getApiHeaders('appKey')
  const userApiHeader = getApiHeaders('user')
  const userPositionCookie = getCookieName('userPosition')
  const userCookie = getCookieName('user')
  const appKeyParameter = getParameterName('appKey')
  const appKeyValue = getAppInformation('key')
  const userPosition = await getStorage(userPositionCookie)

  const userIndex = Router.router.query.userPosition || userPosition || 0

  let usersToken = await getStorage(userCookie)

  if (usersToken) {
    usersToken = JSON.parse(usersToken)
  } else {
    usersToken = []
  }

  const headers = {
    [userApiHeader]: usersToken[userIndex],
    [appKey]: Router.router.query[appKeyParameter] || appKeyValue
  }

  return headers
}
