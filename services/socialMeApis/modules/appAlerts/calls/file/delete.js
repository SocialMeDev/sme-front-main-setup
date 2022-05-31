import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function deleteFile(institutionSlug, fileId) {
  const params = {
    operation: ['File', 'Delete'],
    urlParams: {
      institutionSlug,
      fileId
    }
  }

  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}

export default deleteFile
