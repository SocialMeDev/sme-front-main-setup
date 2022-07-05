import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationalUnitGroupPermissions({
  institutionSlug,
  organizationalUnitSlug,
  groupSlug,
  permission
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'Group', 'Update'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug,
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
