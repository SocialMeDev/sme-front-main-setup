import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function updateGroupPermission(institutionSlug, groupSlug, permission) {
  const params = {
    operation: ['Group', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: {
      permission
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

export default updateGroupPermission
