import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationUnitPersonPermissions({
  institutionSlug,
  organizationUnitSlug,
  personId
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Person', 'Show'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug,
      personId
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`OrganizationUnit Permission Person Show params`, params)

  const response = await API(params)

  console.log(`OrganizationUnit Permission Person Show response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
