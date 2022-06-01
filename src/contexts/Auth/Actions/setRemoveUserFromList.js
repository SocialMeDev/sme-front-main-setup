import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'
import getUsersToken from './getUsersToken'

export default async function removeAuthUser(removedUser, userList) {
  const userCookie = getCookieName('user')

  const usersToken = await getUsersToken()

  const newUsersToken = usersToken.filter((token) => {
    return token !== removedUser.token_token
  })

  const newUserList = userList.filter((user) => {
    return user.id !== removedUser.id
  })

  await setStorage(userCookie, JSON.stringify(newUsersToken))

  return newUserList
}
