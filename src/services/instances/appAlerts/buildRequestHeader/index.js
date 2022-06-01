import {
  getApiHeaders,
  getAppInformation,
  getCookieName
} from 'utils/helpers/sirVariables'
import getCookieByServerSide from 'utils/cookie/server/getCookie'

function buildRequestHeader(request) {
  const userCookie = getCookieName('user')
  const userPositionCookie = getCookieName('userPosition')

  const usersToken = getCookieByServerSide(request, 'dev_usrtkn')
  const userPosition = getCookieByServerSide(request, userPositionCookie)

  const parserUsersToken = JSON.parse(usersToken)

  const apiKeyHeader = getApiHeaders('appKey')
  const userHeader = getApiHeaders('user')

  const apiKey = getAppInformation('key')

  const headers = {
    [apiKeyHeader]: apiKey,
    [userHeader]: parserUsersToken[userPosition]
  }

  return headers
}

export default buildRequestHeader
