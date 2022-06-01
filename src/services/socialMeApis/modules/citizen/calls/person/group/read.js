import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readPersonGroups({
  institutionSlug,
  personId,
  data
}) {
  const params = {
    operation: ['Person', 'ReadGroups'],
    urlParams: {
      institutionSlug,
      personId
    },
    data
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
