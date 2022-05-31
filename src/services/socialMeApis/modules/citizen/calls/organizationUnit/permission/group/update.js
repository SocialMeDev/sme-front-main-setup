import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationUnitGroupPermissions({
  institutionSlug,
  organizationUnitSlug,
  groupSlug,
  permission
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Group', 'Update'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug,
      groupSlug
    },
    data: permission
  }

  console.log(`OrganizationUnit Group Permission Update params`, params)

  const response = await API(params)

  console.log(`OrganizationUnit Group Permission Update response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
