import { deleteStorage } from 'helpers/sirStorage'

export default async function destroyUserPositionCookie() {
  await deleteStorage(process.env.NEXT_PUBLIC_USER_POSITION_COOKIE)
}
