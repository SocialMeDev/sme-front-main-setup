import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function updateGroup(institutionSlug, groupSlug, data) {
  const params = {
    operation: ['Group', 'Update'],
    urlParams: {
      institutionSlug,
      groupSlug
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

export default updateGroup
