import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function approveBondRequest(
  institutionSlug,
  bondRequestId,
  data
) {
  const params = {
    operation: ['Bond', 'Request', 'Approve'],
    urlParams: {
      institutionSlug,
      bondRequestId
    },
    data: data
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
