import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readEligiblePersonsToBindGroup({
  institutionSlug,
  groupSlug,
  filters
}) {
  const params = {
    operation: ['Group', 'Person', 'Available'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
