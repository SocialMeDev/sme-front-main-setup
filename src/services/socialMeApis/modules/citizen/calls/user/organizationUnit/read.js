import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForPersons({
  institutionSlug,
  userId,
  filters
}) {
  const params = {
    operation: ['User', 'OrganizationUnit', 'Read'],
    urlParams: {
      institutionSlug,
      userId
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
