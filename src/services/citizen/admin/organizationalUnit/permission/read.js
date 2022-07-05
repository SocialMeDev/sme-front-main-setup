import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readAvailableOrganizationalUnitPermissions({
  institutionSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'Read'],
    urlParams: {
      institutionSlug
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
