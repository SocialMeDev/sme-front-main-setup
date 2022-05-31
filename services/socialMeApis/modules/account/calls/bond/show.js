import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function showBond(bondId) {
  const params = {
    operation: ['Bond', 'Show'],
    urlParams: {
      bondId
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
