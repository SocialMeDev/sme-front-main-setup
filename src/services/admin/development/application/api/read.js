import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function readAPIsThatCanBindToApplication(appId) {
  const params = {
    operation: ['Application', 'API', 'Read'],
    urlParams: {
      appId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
