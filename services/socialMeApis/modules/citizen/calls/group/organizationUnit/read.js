import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForPersons({
  institutionSlug,
  groupSlug,
  filters
}) {
  const params = {
    operation: ['Group', 'OrganizationUnit', 'Read'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: filters
  }

  console.log(`Read params`, params)

  const response = await API(params)

  console.log(`Read response`, response)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
