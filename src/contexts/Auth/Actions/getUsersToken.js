import { deleteStorage, getStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

export default async function getUsersToken() {
  const userCookie = getCookieName('user')

  let usersToken = await getStorage(userCookie)

  if (usersToken) {
    try {
      usersToken = JSON.parse(usersToken)
    } catch (error) {
      await deleteStorage(userCookie)

      return []
    }
  }

  if (!Array.isArray(usersToken)) {
    deleteStorage(usersToken)

    return []
  }

  return usersToken
}
