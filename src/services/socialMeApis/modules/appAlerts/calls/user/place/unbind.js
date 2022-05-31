import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function unbindPlaceFromUser({
  institutionSlug,
  personId,
  placeId
}) {
  const params = {
    operation: ['User', 'Place', 'Unbind'],
    urlParams: {
      institutionSlug,
      personId,
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
