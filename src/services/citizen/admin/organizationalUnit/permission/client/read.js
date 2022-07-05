import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationalUnitUserPermissions({
  institutionSlug,
  organizationalUnitSlug,
  userId
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'User', 'Show'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug,
      userId
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
