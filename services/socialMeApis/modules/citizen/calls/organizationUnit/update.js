import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateOrganizationUnit({
  institutionSlug,
  organizationUnitSlug,
  data
}) {
  const params = {
    operation: ['OrganizationUnit', 'Update'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
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
