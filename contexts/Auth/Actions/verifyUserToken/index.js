import { setStorage, getStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'
import checkUserToken from 'services/socialMeApis/modules/auth/calls/user/check'
import getUsersTokens from '../getUsersTokens'

export default async function verifyUserToken() {
  const userPositionCookie = getCookieName('userPosition')

  const userPositionInCookie = await getStorage(userPositionCookie)

  const usersToken = await getUsersTokens()

  let userPosition = userPositionInCookie || 0

  if (usersToken.length !== 0) {
    const response = await checkUserToken()

    if (response.header.success) {
      await setStorage(userPositionCookie, userPosition)
    }

    return response
  }

  return {
    header: {
      success: false
    }
  }
}
