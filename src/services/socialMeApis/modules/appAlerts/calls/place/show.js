import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showPlace({ institutionSlug, placeId }) {
  const params = {
    operation: ['Place', 'Show'],
    urlParams: {
      institutionSlug,
      placeId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
