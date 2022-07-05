import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteBond(institutionSlug, bondId) {
  const params = {
    operation: ['Bond', 'Delete'],
    urlParams: {
      institutionSlug,
      bondId
    }
  }

  const response = await API(params)
  console.log(response)
  if (response?.header?.success) {
    toast.error(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
