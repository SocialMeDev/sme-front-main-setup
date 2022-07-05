import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updateFormBondOptions(
  institutionSlug,
  bondOptionId,
  formFieldId,
  data
) {
  if (!formFieldId || !institutionSlug || !bondOptionId || !data) return

  const params = {
    operation: ['BondOptions', 'Form', 'Update'],
    urlParams: {
      institutionSlug,
      bondOptionId,
      formFieldId
    },
    data: data
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
