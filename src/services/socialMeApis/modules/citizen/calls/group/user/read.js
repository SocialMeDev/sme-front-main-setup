import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readGroupPersons({ institutionSlug, groupSlug }) {
  const params = {
    operation: ['Group', 'Person', 'Read'],
    urlParams: {
      institutionSlug,
      groupSlug
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
