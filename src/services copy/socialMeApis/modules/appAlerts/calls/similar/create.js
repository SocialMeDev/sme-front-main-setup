import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function createTermSimilar(institutionSlug, termId, data) {
  const params = {
    operation: ['Similar', 'Create'],
    urlParams: {
      institutionSlug,
      termId
    },
    data: data
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
