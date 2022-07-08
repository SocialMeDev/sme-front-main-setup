import getAuthUsers from 'services/auth/authUser/read'

import getUsersTokens from '../getUsersTokens'
import sortUserList from './sortUserList'

export default async function getUserList() {
  const usersToken = await getUsersTokens()

  if (usersToken.length === 0) return []

  const response = await getAuthUsers(usersToken)

  let userList = []

  if (response.header.success) {
    userList = await sortUserList(response.body.user.elements, usersToken)
  }

  return userList
}
