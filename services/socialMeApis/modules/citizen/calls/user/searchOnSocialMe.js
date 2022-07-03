import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function searchPersonOnSocialMe({
  institutionSlug,
  filters
}) {
  const params = {
    operation: ['User', 'SearchOnSocialMe'],
    urlParams: {
      institutionSlug
    },
    data: {
      filter: filters
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
