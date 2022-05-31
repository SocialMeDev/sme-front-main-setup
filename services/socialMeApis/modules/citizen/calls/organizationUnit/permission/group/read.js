import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readOrganizationUnitGroupPermissions({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Group', 'Read'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`OrganizationUnit Group Permission Read params`, params)

  const response = await API(params)

  console.log(`OrganizationUnit Group Permission Read response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
