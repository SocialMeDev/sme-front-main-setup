import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function bindServiceToActivityType({
  institutionSlug,
  activityTypeSlug,
  serviceSlug
}) {
  const params = {
    operation: ['ActivityType', 'Service', 'Bind'],
    urlParams: {
      institutionSlug,
      activityTypeSlug,
      serviceSlug
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
