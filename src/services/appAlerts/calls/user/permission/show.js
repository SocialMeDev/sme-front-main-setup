import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getUserPermissions(institutionSlug) {
  const params = {
    operation: ['User', 'Permission', 'Show'],
    urlParams: {
      institutionSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
