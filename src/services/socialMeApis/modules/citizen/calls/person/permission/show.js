import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listPersonPermissions({
  institutionSlug,
  personId
}) {
  const params = {
    operation: ['Person', 'Permission', 'Show'],
    urlParams: {
      institutionSlug,
      personId
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`Permission Show params`, params)

  const response = await API(params)

  console.log(`Permission Show response`, response)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
