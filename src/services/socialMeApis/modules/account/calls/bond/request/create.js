import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function createBondRequests(bondOptionId, data) {
  if (!bondOptionId || !data) return
  const params = {
    operation: ['Bond', 'Request', 'Create'],
    urlParams: {
      bondOptionId
    },
    data
  }
  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
