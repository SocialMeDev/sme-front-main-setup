import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function sortFormBondOptions(
  institutionSlug,
  bondOptionId,
  data
) {
  if (!institutionSlug || !bondOptionId || !data) return

  const params = {
    operation: ['BondOptions', 'Form', 'Sort'],
    urlParams: {
      institutionSlug,
      bondOptionId
    },
    data: data
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
