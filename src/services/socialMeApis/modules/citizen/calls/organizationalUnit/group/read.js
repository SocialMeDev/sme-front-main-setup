import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readOrganizationalUnitGroups({
  institutionSlug,
  organizationalUnitSlug,
  filters
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Group', 'Read'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
