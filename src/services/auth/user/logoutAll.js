import API from 'services/socialMeApis/modules/auth'
import { deleteStorage } from 'utils/helpers/sirStorage'
import {
  getCookieName,
  getApiHeaders,
  getAppInformation
} from 'utils/helpers/sirVariables'
import toast from 'utils/toast'
import getUsersTokens from 'contexts/Auth/Actions/getUsersTokens'

export default async function logoutAll() {
  const userPositionCookie = await getCookieName('userPosition')

  const userApiHeader = await getApiHeaders('user')
  const appKey = await getApiHeaders('appKey')
  const appKeyValue = await getAppInformation('key')

  const usersToken = await getUsersTokens()

  const params = {
    operation: ['User', 'Logout'],
    headers: {
      [userApiHeader]: usersToken.toString(),
      [appKey]: appKeyValue
    }
  }

  const response = await API(params)

  if (response?.header?.success) {
    await deleteStorage(userPositionCookie)
  } else {
    toast.error(response.header.title)
  }

  return response
}
