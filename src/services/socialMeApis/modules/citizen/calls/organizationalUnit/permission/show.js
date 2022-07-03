import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationalUnitPermissions({
  institutionSlug,
  organizationalUnitSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'Show'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
