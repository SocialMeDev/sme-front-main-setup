import { deleteStorage, getStorage } from 'helpers/sirStorage'

export default async function getUsersToken() {
  const usersTokensCookie = process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE

  let usersToken = await getStorage(usersTokensCookie)

  if (usersToken) {
    try {
      usersToken = JSON.parse(usersToken)
    } catch (error) {
      await deleteStorage(usersTokensCookie)

      return []
    }
  }

  if (!Array.isArray(usersToken)) {
    deleteStorage(usersToken)

    return []
  }

  return usersToken
}
