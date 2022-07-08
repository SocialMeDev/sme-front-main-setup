import { setStorage } from 'helpers/sirStorage'
import getUsersTokens from '../getUsersTokens'

function treatNewAuthUser(user, token) {
  return {
    ...user,
    token_status: 'ACTIVE',
    token_token: token
  }
}

export default async function authenticateUser(newUser, userList) {
  const { person, usrtkn } = newUser

  const usersTokensCookie = process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE
  const userPositionCookie = process.env.NEXT_PUBLIC_USER_POSITION_COOKIE

  const usersToken = await getUsersTokens()

  const newToken = usrtkn

  let newUserIndex = 0

  const userAlreadyInList = userList.some((user) => user.id === person.id)

  const user = treatNewAuthUser(person, usrtkn)

  if (userAlreadyInList) {
    const findUser = (user) => person.id === user.id

    newUserIndex = userList.findIndex(findUser)

    usersToken[newUserIndex] = newToken

    await setStorage(usersTokensCookie, JSON.stringify(usersToken))
  } else {
    await setStorage(
      usersTokensCookie,
      JSON.stringify([...usersToken, newToken])
    )

    newUserIndex = usersToken.length
  }

  await setStorage(userPositionCookie, newUserIndex)

  return { user, alreadyExist: userAlreadyInList }
}
