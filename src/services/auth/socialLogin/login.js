import API from 'services/socialMeApis/modules/auth'

import { getApiHeaders, getAppInformation } from 'utils/helpers/sirVariables'

import toast from 'utils/toast'

export default async function sociaLogin({ provider, providerId }) {
  const appKey = await getApiHeaders('appKey')
  const appKeyValue = await getAppInformation('key')

  const headers = {
    [appKey]: appKeyValue
  }

  const params = {
    operation: ['SocialLogin', 'Login'],
    urlParams: {
      provider
    },
    data: {
      providerId,
      keep: true
    },
    headers
  }

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (response.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
