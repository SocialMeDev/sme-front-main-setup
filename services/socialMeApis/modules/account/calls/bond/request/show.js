import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function showBondRequest(bondRequestId) {
  const params = {
    operation: ['Bond', 'Request', 'Show'],
    urlParams: {
      bondRequestId
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
