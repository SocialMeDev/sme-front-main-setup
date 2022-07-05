import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showTerm(institutionSlug, termId) {
  const params = {
    operation: ['Term', 'Show'],
    urlParams: {
      institutionSlug,
      termId
    }
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
