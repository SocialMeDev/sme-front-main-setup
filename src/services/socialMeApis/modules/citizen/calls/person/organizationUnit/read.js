import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForPersons({
  institutionSlug,
  personId,
  filters
}) {
  const params = {
    operation: ['Person', 'OrganizationUnit', 'Read'],
    urlParams: {
      institutionSlug,
      personId
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
