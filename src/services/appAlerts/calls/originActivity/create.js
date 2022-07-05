import API from 'services/socialMeApis/modules/appAlerts'
import toast from 'utils/toast'

export default async function createOriginActivities({
  institutionSlug,
  uniquePersonId,
  data
}) {
  const params = {
    operation: ['OriginActivity', 'Create'],
    urlParams: {
      institutionSlug,
      uniquePersonId
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  }
  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
