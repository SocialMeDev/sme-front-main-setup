import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationalUnit({
  institutionSlug,
  organizationalUnitSlug,
  data
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Update'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
