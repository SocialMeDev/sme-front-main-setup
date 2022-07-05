import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getAvailableGroupPermissions(institutionSlug) {
  const params = {
    operation: ['Permission', 'Group', 'Read'],
    urlParams: {
      institutionSlug
    }
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
