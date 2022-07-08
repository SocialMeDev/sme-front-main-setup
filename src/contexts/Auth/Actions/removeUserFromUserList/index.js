import { setStorage } from 'helpers/sirStorage'

import getUsersTokens from '../getUsersTokens'

export default async function removeUserFromUserList(removedUser, userList) {
  const usersTokensCookie = process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE

  const usersToken = await getUsersTokens()

  const newUsersToken = usersToken.filter((token) => {
    return token !== removedUser.token_token
  })

  const newUserList = userList.filter((user) => {
    return user.id !== removedUser.id
  })

  await setStorage(usersTokensCookie, JSON.stringify(newUsersToken))

  return newUserList
}
