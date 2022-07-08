import { getStorage } from 'helpers/sirStorage'

import API_HEADERS from 'constants/apiHeaders'

async function getAPIDefaultHeader() {
  const userPositionCookie = process.env.NEXT_PUBLIC_USER_POSITION_COOKIE
  const usersTokensCookie = process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE
  const apiKeyValue = process.env.NEXT_PUBLIC_API_KEY

  const userPosition = await getStorage(userPositionCookie)

  const userIndex = userPosition || 0

  let usersToken = await getStorage(usersTokensCookie)

  if (usersToken) usersToken = JSON.parse(usersToken)

  const headers = {
    [API_HEADERS.USER_TOKEN]: usersToken[userIndex],
    [API_HEADERS.KEY]: apiKeyValue
  }

  return headers
}

export default getAPIDefaultHeader
