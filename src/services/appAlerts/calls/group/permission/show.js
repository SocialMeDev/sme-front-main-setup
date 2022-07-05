import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function showGroupPermissions(institutionSlug, groupSlug) {
  const params = {
    operation: ['Group', 'Permission', 'Show'],
    urlParams: {
      institutionSlug,
      groupSlug
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

export default showGroupPermissions
