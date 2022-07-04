import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createBondInvite(
  institutionSlug,
  bondOptionId,
  personId
) {
  if (!institutionSlug || !bondOptionId || !personId) return

  const params = {
    operation: ['Bond', 'Invite', 'Create'],
    urlParams: {
      institutionSlug,
      bondOptionId,
      personId
    }
  }

  const response = await API(params)
  console.log('response ', response)
  if (response?.header?.success) {
    toast.success(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
