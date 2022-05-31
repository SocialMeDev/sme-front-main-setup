import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationUnitPersonPermissions({
  institutionSlug,
  organizationUnitSlug,
  personId,
  permission
}) {
  const params = {
    operation: ['OrganizationUnit', 'Permission', 'Person', 'Update'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug,
      personId
    },
    data: permission
  }

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
