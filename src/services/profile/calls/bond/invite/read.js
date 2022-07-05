import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function readBondInvites(filters) {
  const params = {
    operation: ['Bond', 'Invite', 'Read'],
    data: filters
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
