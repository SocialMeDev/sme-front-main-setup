import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function deleteBondRequest(bondRequestId, data) {
  const params = {
    operation: ['Bond', 'Request', 'Delete'],
    urlParams: {
      bondRequestId
    },
    data
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
