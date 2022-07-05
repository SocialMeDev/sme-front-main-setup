import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updateFormBondOptions(
  institutionSlug,
  bondOptionId,
  formFieldId
) {
  if (!formFieldId || !institutionSlug || !bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Form', 'Update'],
    urlParams: {
      institutionSlug,
      bondOptionId,
      formFieldId
    }
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
