import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updateActivityType({
  institutionSlug,
  activityTypeSlug,
  data
}) {
  const params = {
    operation: ['ActivityType', 'Update'],
    urlParams: {
      institutionSlug,
      activityTypeSlug
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
