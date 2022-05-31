import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'
import getUsersToken from './getUsersToken'

function treatNewAuthUser(user, token) {
  return {
    ...user,
    token_status: 'ACTIVE',
    token_token: token
  }
}

export default async function setAuthenticatedUser(
  dispatch,
  newUser,
  userList
) {
  const { person, usrtkn } = newUser

  const userCookie = getCookieName('user')
  const userPositionCookie = getCookieName('userPosition')

  const usersToken = await getUsersToken()

  const newToken = usrtkn

  let newUserIndex = 0

  const userAlreadyInList = userList.some((user) => user.id === person.id)

  const user = treatNewAuthUser(person, usrtkn)

  if (userAlreadyInList) {
    const findUser = (user) => {
      return person.id === user.id
    }

    newUserIndex = userList.findIndex(findUser)

    usersToken[newUserIndex] = newToken

    await setStorage(userCookie, JSON.stringify(usersToken))

    dispatch({
      type: 'UpdateUserInList',
      payload: user
    })
  } else {
    await setStorage(userCookie, JSON.stringify([...usersToken, newToken]))

    newUserIndex = usersToken.length

    dispatch({
      type: 'AddUserInList',
      payload: user
    })
  }

  dispatch({
    type: 'SetUser',
    payload: {
      user,
      userPosition: newUserIndex
    }
  })

  await setStorage(userPositionCookie, newUserIndex)

  return newUserIndex
}
