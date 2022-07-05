import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteOrganizationalUnit({
  institutionSlug,
  organizationalUnitSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Delete'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
