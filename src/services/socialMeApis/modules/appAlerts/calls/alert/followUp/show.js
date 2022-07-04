import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showAlertFollowUp(
  institutionSlug,
  alertId,
  followUpId
) {
  const params = {
    operation: ['Alert', 'FollowUp', 'Show'],
    urlParams: {
      institutionSlug,
      alertId,
      followUpId
    }
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
