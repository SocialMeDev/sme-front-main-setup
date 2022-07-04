import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function readFile(institutionSlug, filters) {
  const params = {
    operation: ['File', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response.header.title)
  }

  return response
}

export default readFile
