import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function unpublishOrganizationalUnit({
  institutionSlug,
  organizationalUnitSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Unpublish'],
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
