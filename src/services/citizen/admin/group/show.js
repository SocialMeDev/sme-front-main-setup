import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function showGroup({ institutionSlug, groupSlug }) {
  const params = {
    operation: ['Group', 'Show'],
    urlParams: {
      institutionSlug,
      groupSlug
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}