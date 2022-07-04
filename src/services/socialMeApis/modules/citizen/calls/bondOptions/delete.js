import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteBondOptions(institutionSlug, bondOptionId) {
  if (!institutionSlug || !bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Delete'],
    urlParams: {
      institutionSlug,
      bondOptionId
    }
  }
  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
