import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readOrganizationUnitPersonPermissions({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Person', 'Read'],
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

  console.log(`OrganizationUnit Permission Person READ params`, params)

  const response = await API(params)

  console.log(`OrganizationUnit Permission Person READ response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
