import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updateUserPermission(
  institutionSlug,
  personId,
  permission
) {
  const params = {
    operation: ['User', 'Permission', 'Update'],
    urlParams: {
      personId,
      institutionSlug
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
