import API from 'services/socialMeApis/modules/auth'

import { getApiHeaders, getAppInformation } from 'utils/helpers/sirVariables'
import toast from 'utils/toast'

export default async function socialPreLogin({ provider, providerId }) {
  const appKey = await getApiHeaders('appKey')
  const appKeyValue = await getAppInformation('key')

  const headers = {
    [appKey]: appKeyValue
  }

  const params = {
    operation: ['SocialLogin', 'PreLogin'],
    urlParams: {
      provider
    },
    data: {
      providerId
    },
    headers
  }

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
