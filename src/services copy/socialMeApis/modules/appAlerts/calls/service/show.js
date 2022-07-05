import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'Show'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}