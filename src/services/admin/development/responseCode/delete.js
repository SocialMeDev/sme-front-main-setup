import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function deleteResponseCode(responseCodeId) {
  const params = {
    operation: ['ResponseCode', 'Delete'],
    urlParams: {
      responseCodeId
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
