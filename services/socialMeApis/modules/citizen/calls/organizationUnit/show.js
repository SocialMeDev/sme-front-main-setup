import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showOrganizationUnit({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Show'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
