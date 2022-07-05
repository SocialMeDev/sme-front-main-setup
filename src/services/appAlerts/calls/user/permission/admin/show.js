import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getAnyUserPermissions(institutionSlug, personId) {
  const params = {
    operation: ['User', 'Permission', 'Admin', 'Show'],
    urlParams: {
      institutionSlug,
      personId
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
