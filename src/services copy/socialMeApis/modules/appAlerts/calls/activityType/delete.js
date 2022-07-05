import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function deleteActivityType({
  institutionSlug,
  activityTypeSlug
}) {
  const params = {
    operation: ['ActivityType', 'Delete'],
    urlParams: {
      institutionSlug,
      activityTypeSlug
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
