import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

export default async function removeInvalidFormatedTokens(
  userList,
  usersToken
) {
  const userCookie = await getCookieName('user')

  const validUserTokens = []

  usersToken.forEach((token, index) => {
    let user = ''

    if (userList[index]) {
      user = userList[index]
    }

    if (token === user.token_token) {
      validUserTokens.push(token)
    }
  })

  await setStorage(userCookie, validUserTokens)
}
