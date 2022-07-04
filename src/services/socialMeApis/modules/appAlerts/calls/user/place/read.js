import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readUserPlaces({ institutionSlug, personId }) {
  const params = {
    operation: ['User', 'Place', 'Read'],
    urlParams: {
      institutionSlug,
      personId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
