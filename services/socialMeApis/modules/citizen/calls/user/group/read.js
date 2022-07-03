import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readPersonGroups({
  institutionSlug,
  userId,
  filters
}) {
  const params = {
    operation: ['User', 'ReadGroups'],
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
