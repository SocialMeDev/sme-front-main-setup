import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'
import { getApiHeaders, getAppInformation } from 'utils/helpers/sirVariables'

export default async function getAuthUsers(usersToken) {
  const userApiHeader = await getApiHeaders('user')

  const appKey = await getApiHeaders('appKey')
  const appKeyValue = await getAppInformation('key')

  const params = {
    operation: ['AuthUser', 'Read'],
    headers: {
      [userApiHeader]: usersToken.toString(),
      [appKey]: appKeyValue
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response.header.title)
  }

  return response
}
