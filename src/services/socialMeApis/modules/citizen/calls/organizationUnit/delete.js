import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteOrganizationUnit({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Delete'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
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