import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readBindedUsersInPlace({
  institutionSlug,
  placeId,
  filters
}) {
  const params = {
    operation: ['Place', 'User', 'Read'],
    urlParams: {
      institutionSlug,
      placeId
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
