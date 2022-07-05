import { getStorage } from 'utils/helpers/sirStorage'
import {
  getApiHeaders,
  getCookieName,
  getAppInformation
} from 'utils/helpers/sirVariables'

async function getApiDefaultHeader() {
  const appKey = await getApiHeaders('appKey')
  const userApiHeader = await getApiHeaders('user')

  const userPositionCookie = await getCookieName('userPosition')
  const userCookie = await getCookieName('user')

  const appKeyValue = await getAppInformation('key')

  const userPosition = await getStorage(userPositionCookie)

  const userIndex = userPosition || 0

  let usersToken = await getStorage(userCookie)

  if (usersToken) usersToken = JSON.parse(usersToken)

  const headers = {
    [userApiHeader]: usersToken[userIndex],
    [appKey]: appKeyValue
  }

  return headers
}

export default getApiDefaultHeader
