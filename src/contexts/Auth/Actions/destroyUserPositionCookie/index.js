import { deleteStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

export default async function destroyUserPositionCookie() {
  const userPositionCookie = await getCookieName('userPosition')

  await deleteStorage(userPositionCookie)
}
