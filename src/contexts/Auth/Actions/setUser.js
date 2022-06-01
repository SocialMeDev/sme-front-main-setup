import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

export default async function setUser(userPosition) {
  const userPositionCookie = getCookieName('userPosition')

  if (userPosition !== false) {
    await setStorage(userPositionCookie, userPosition)
  }
}
