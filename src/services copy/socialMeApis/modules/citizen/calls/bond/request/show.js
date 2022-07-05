import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function showBondRequest(institutionSlug, bondRequestId) {
  const params = {
    operation: ['Bond', 'Request', 'Show'],
    urlParams: {
      institutionSlug,
      bondRequestId
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
