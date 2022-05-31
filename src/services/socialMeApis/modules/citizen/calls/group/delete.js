import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteGroup({ institutionSlug, groupSlug }) {
  const params = {
    operation: ['Group', 'Delete'],
    urlParams: {
      institutionSlug,
      groupSlug
    }
  }

  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
