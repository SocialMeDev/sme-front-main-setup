import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updatePlace({ institutionSlug, placeId, data }) {
  const params = {
    operation: ['Place', 'Update'],
    urlParams: {
      institutionSlug,
      placeId
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}