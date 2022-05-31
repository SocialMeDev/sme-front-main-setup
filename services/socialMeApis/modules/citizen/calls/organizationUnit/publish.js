import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function publishOrganizationUnit({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'Publish'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    }
  }

  console.log(`params`, params)

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
