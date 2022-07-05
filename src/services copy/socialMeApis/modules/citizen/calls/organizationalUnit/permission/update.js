import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationalUnitPermissions({
  institutionSlug,
  organizationalUnitSlug,
  permission
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    },
    data: {
      permission
    }
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
