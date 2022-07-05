import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function readBondRequests(data) {
  const params = {
    operation: ['Bond', 'Request', 'Read'],
    data
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
