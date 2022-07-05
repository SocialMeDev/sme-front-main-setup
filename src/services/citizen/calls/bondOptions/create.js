import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createBondOptions(institutionSlug, data) {
  if (!data || !institutionSlug) return

  const params = {
    operation: ['BondOptions', 'Create'],
    urlParams: {
      institutionSlug
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
