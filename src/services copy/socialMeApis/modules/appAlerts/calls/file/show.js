import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function showFile(institutionSlug, fileId) {
  const params = {
    operation: ['File', 'Show'],
    urlParams: {
      institutionSlug,
      fileId
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response.header.title)
  }

  return response
}

export default showFile
