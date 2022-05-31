import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForPersons({
  institutionSlug
}) {
  const params = {
    operation: ['Person', 'Permission', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`Permission Read params`, params)

  const response = await API(params)

  console.log(`Permission Read response`, response)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
