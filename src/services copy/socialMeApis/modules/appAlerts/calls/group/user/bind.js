import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function bindGroupToUser(institutionSlug, groupSlug, personId) {
  const params = {
    operation: ['Group', 'User', 'Bind'],
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

export default bindGroupToUser
