import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationalUnitGroupPermissions({
  institutionSlug,
  organizationalUnitSlug,
  groupSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'Group', 'Show'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug,
      groupSlug
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
