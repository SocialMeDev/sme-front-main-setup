import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function readBondOptions(filters) {
  const params = {
    operation: ['BondOptions', 'Read'],
    data: filters
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
