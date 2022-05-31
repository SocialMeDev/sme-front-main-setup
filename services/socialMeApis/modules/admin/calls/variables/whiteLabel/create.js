import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function createWhiteLabel(data) {
  const params = {
    operation: ['WhiteLabel', 'Create'],
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
