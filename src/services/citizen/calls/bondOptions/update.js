import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updateBondOptions(
  institutionSlug,
  bondOptionId,
  data
) {
  if (!data || !institutionSlug) return

  const params = {
    operation: ['BondOptions', 'Update'],
    urlParams: {
      institutionSlug,
      bondOptionId
    },
    data: data
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
