import API from 'services/socialMeApis/modules/auth'
import { getApiHeaders, getAppInformation } from 'utils/helpers/sirVariables'
import toast from 'utils/toast'

export default async function linkSocialAccount(
  userToken,
  { provider, providerId }
) {
  const appKey = await getApiHeaders('appKey')
  const userApiHeader = await getApiHeaders('user')

  const appKeyValue = await getAppInformation('key')

  const headers = {
    [userApiHeader]: userToken,
    [appKey]: appKeyValue,
    ggldtkn: providerId
  }

  const params = {
    operation: ['SocialLogin', 'Link'],
    urlParams: {
      provider
    },
    data: {
      providerId
    },
    headers
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
