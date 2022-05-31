import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function updateAlertType(institutionSlug, alertTypeSlug, data) {
  const params = {
    operation: ['AlertType', 'Update'],
    urlParams: {
      institutionSlug,
      alertTypeSlug
    },
    data
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}

export default updateAlertType
