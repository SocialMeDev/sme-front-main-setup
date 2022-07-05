import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function updateFile(institutionSlug, name, fileId) {
  const params = {
    operation: ['File', 'Update'],
    urlParams: {
      institutionSlug,
      fileId
    },
    data: {
      name
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

export default updateFile
