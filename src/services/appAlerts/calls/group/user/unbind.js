import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function unbindGroupFromUser(
  institutionSlug,
  groupSlug,
  personId
) {
  const params = {
    operation: ['Group', 'User', 'Unbind'],
    urlParams: {
      institutionSlug,
      groupSlug,
      personId
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
