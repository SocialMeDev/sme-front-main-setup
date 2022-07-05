import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getTermSimilar(institutionSlug, termId, filters) {
  const params = {
    operation: ['Similar', 'Read'],
    urlParams: {
      institutionSlug,
      termId
    },
    data: filters
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
