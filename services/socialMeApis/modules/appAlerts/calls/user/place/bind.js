import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function bindPlaceToUser({
  institutionSlug,
  placeId,
  personId
}) {
  const params = {
    operation: ['User', 'Place', 'Bind'],
    urlParams: {
      institutionSlug,
      personId,
      placeId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
