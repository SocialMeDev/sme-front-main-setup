import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function deletePlace({ institutionSlug, placeId }) {
  const params = {
    operation: ['Place', 'Delete'],
    urlParams: {
      institutionSlug,
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
