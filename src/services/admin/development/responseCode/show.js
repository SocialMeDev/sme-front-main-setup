import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function showResponseCode(responseCodeId) {
  const params = {
    operation: ['ResponseCode', 'Show'],
    urlParams: {
      responseCodeId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
