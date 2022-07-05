import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createBondInvite(
  institutionSlug,
  bondOptionId,
  personId,
  data
) {
  if (!institutionSlug || !bondOptionId || !personId) return

  const params = {
    operation: ['Bond', 'Invite', 'Create'],
    urlParams: {
      institutionSlug,
      bondOptionId,
      personId
    },
    data: data
  }
  console.log(params)
  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
