import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteBondInvite(
  institutionSlug,
  bondOptionId,
  personId
) {
  const params = {
    operation: ['Bond', 'Invite', 'Delete'],
    urlParams: {
      institutionSlug,
      bondOptionId,
      personId
    }
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
