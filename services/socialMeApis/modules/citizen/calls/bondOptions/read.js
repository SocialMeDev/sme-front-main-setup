import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readBondOptions(institutionSlug, data) {
  const params = {
    operation: ['BondOptions', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: data
  }
  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
