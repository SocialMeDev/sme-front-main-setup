import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showServicePlace({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  placeId
}) {
  const params = {
    operation: ['Service', 'Place', 'Show'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      placeId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
