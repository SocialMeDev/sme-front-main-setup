import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationUnitGroupPermissions({
  institutionSlug,
  organizationUnitSlug,
  groupSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Group', 'Show'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug,
      groupSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`OrganizationUnit Group Permission Show params`, params)

  const response = await API(params)

  console.log(`OrganizationUnit Group Permission Show response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
