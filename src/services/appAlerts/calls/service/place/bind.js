import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function bindPlaceToService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  placeId
}) {
  const params = {
    operation: ['Service', 'Place', 'Bind'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      placeId
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
