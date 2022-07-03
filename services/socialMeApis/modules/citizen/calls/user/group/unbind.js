import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function bindGroupToPerson({
  institutionSlug,
  userId,
  groupSlug
}) {
  const params = {
    operation: ['User', 'UnbindGroup'],
    urlParams: {
      institutionSlug,
      groupSlug,
      userId
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
