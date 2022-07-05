import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationalUnitUserPermissions({
  institutionSlug,
  organizationalUnitSlug,
  userId,
  permission
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'User', 'Update'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug,
      userId
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
