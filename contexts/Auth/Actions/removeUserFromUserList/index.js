import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'
import getUsersTokens from '../getUsersTokens'

export default async function removeUserFromUserList(removedUser, userList) {
  const userCookie = getCookieName('user')

  const usersToken = await getUsersTokens()

  const newUsersToken = usersToken.filter((token) => {
    return token !== removedUser.token_token
  })

  const newUserList = userList.filter((user) => {
    return user.id !== removedUser.id
  })

  await setStorage(userCookie, JSON.stringify(newUsersToken))

  return newUserList
}
