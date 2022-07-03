import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForPersons({
  institutionSlug
}) {
  const params = {
    operation: ['User', 'Permission', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
