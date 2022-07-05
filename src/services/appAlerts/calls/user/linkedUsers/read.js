import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getLinkedUsers(institutionSlug, data) {
  const params = {
    operation: ['User', 'LinkedUser'],
    urlParams: {
      institutionSlug
    },
    data: data
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
