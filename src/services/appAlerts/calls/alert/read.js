import API from 'services/socialMeApis/modules/appAlerts'
import toast from 'utils/toast'

export default async function getAlerts(institutionSlug, data) {
  const params = {
    operation: ['Alert', 'Read'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
