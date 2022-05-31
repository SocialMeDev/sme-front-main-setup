import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showServicePlace({
  institutionSlug,
  personId,
  placeId
}) {
  const params = {
    operation: ['User', 'Place', 'Show'],
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
