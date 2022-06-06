import { setStorage, getStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'
import checkUserToken from 'services/socialMeApis/modules/auth/calls/user/check'
import getUsersToken from './getUsersToken'

export default async function verifyUserToken(userPositionInURL) {
  const userPositionCookie = getCookieName('userPosition')

  const userPositionInCookie = await getStorage(userPositionCookie)

  const usersToken = await getUsersToken()

  let userPosition = userPositionInCookie || 0

  if (userPositionInURL) {
    userPosition = Number(userPositionInURL)
  }

  let response = {
    header: {
      success: false
    }
  }

  if (usersToken.length !== 0) {
    response = await checkUserToken()

    if (response.header.success) {
      await setStorage(userPositionCookie, userPosition)

      response.position = userPosition
    }
  }

  return response
}
