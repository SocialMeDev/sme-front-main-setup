import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readOrganizationUnitPersons({
  institutionSlug,
  organizationUnitSlug,
  filters
}) {
  const params = {
    operation: ['OrganizationUnit', 'Person', 'Read'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    },
    data: filters
  }

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
