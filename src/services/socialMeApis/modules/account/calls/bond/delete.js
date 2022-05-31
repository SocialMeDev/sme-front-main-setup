import API from 'services/socialMeApis/modules/account'
import toast from 'utils/toast'

export default async function deleteBond(bondId) {
  const params = {
    operation: ['Bond', 'Delete'],
    urlParams: {
      bondId
    }
  }

  const response = await API(params)

  if (response?.header?.success) {
    toast.error(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
