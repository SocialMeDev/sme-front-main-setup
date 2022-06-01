import Router from 'next/router'
import { getStorage } from 'utils/helpers/sirStorage'
import {
  getApiHeaders,
  getCookieName,
  getAppInformation
} from 'utils/helpers/sirVariables'

export default async function prepareHeader() {
  const appKey = await getApiHeaders('appKey')
  const userApiHeader = await getApiHeaders('user')

  const userPositionCookie = await getCookieName('userPosition')
  const userCookie = await getCookieName('user')

  const appKeyValue = await getAppInformation('key')

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
    [appKey]: appKeyValue
  }

  return headers
}
