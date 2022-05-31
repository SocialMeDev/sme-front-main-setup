import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function showBond(institutionSlug, bondId) {
  const params = {
    operation: ['Bond', 'Show'],
    urlParams: {
      institutionSlug,
      bondId
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
