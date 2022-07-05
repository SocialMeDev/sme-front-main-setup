import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readFormBondOptions(
  institutionSlug,
  bondOptionId,
  data
) {
  if (!institutionSlug || !bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Form', 'Read'],
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
