import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationUnitPermissions({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Show'],
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

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
