import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function searchPersonInInstitution({
  institutionSlug,
  data
}) {
  const params = {
    operation: ['User', 'SearchInInstitution'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
