import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showInstitution(institutionSlug) {
  const params = {
    operation: ['ServicePublic', 'Institution', 'Show'],
    urlParams: {
      institutionSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
