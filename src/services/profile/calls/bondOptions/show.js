import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function showBondOptions(bondOptionId) {
  if (!bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Show'],
    urlParams: {
      bondOptionId
    }
  }
  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
