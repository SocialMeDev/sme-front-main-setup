import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function getAlertTypes(institutionSlug, data, showToast = true) {
  const params = {
    operation: ['AlertType', 'Read'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    if (showToast) toast.error(response.header.title)
  }

  return response
}

export default getAlertTypes
