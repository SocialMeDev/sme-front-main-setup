import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readOrganizationUnitGroups({
  institutionSlug,
  organizationUnitSlug,
  filters
}) {
  const params = {
    operation: ['OrganizationUnit', 'Group', 'Read'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
