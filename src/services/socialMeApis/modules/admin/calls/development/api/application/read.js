import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function readApplicationsForBindToAPI(apiId) {
  const params = {
    operation: ['API', 'Application', 'Read'],
    urlParams: {
      apiId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
