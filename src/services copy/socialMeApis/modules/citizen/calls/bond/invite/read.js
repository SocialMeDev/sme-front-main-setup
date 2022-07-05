import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readBondInvites(institutionSlug, filters) {
  const params = {
    operation: ['Bond', 'Invite', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: filters
  }

  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
