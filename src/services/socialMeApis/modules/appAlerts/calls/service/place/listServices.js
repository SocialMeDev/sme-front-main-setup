import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function listServices({ institutionSlug, placeId, data }) {
  const params = {
    operation: ['Service', 'Place', 'ListServices'],
    urlParams: {
      institutionSlug,
      placeId
    },
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
