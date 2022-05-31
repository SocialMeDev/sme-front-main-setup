import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updateTerm(institutionSlug, termId, terms) {
  const params = {
    operation: ['Term', 'Update'],
    urlParams: {
      institutionSlug,
      termId
    },
    data: terms
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
