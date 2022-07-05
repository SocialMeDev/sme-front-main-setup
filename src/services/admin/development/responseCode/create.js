import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function createResponseCode(data) {
  const params = {
    operation: ['ResponseCode', 'Create'],
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
