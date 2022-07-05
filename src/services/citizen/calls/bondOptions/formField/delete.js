import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteFormBondOptions(
  institutionSlug,
  bondOptionId,
  formFieldId
) {
  if (!formFieldId || !institutionSlug || !bondOptionId) return

  const params = {
    operation: ['BondOptions', 'Form', 'Delete'],
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
