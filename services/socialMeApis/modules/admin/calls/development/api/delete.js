import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function deleteAPI(apiId) {
  const params = {
    operation: ['API', 'Delete'],
    apiId
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
