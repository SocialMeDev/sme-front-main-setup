import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showActivityType({
  institutionSlug,
  activityTypeSlug
}) {
  const params = {
    operation: ['ActivityType', 'Show'],
    urlParams: {
      institutionSlug,
      activityTypeSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
