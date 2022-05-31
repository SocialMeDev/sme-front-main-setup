import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createFormBondOptions(
  institutionSlug,
  bondOptionId,
  data
) {
  if (!data || !institutionSlug || !bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Form', 'Create'],
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
