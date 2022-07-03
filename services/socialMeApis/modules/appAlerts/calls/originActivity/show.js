import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showOriginActivities({
  institutionSlug,
  originActivityId
}) {
  const params = {
    operation: ['OriginActivity', 'Show'],
    urlParams: {
      institutionSlug,
      originActivityId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
