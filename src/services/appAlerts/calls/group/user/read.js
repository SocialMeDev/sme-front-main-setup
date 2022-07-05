import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getUsersInGroup(
  institutionSlug,
  groupSlug,
  filters
) {
  const params = {
    operation: ['Group', 'User', 'Read'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
