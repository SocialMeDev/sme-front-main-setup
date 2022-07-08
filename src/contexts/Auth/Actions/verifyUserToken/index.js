import { setStorage, getStorage } from 'helpers/sirStorage'

import checkUserToken from 'services/auth/user/check'
import getUsersTokens from '../getUsersTokens'

export default async function verifyUserToken() {
  const userPositionCookie = process.env.NEXT_PUBLIC_USER_POSITION_COOKIE

  const userPositionCookieValue = await getStorage(userPositionCookie)

  const usersToken = await getUsersTokens()

  if (usersToken.length !== 0) {
    const response = await checkUserToken()

    if (response.header.success) {
      await setStorage(userPositionCookie, userPositionCookieValue)
    }

    return response
  }

  return {
    header: {
      success: false
    }
  }
}
