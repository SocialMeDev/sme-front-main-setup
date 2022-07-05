import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showLog(institutionSlug, logId) {
  const params = {
    operation: ['Log', 'Show'],
    urlParams: {
      institutionSlug,
      logId
    }
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
