import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function uploadFile(
  institutionSlug,
  file,
  onUploadProgress
) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['File', 'Upload'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params, { onUploadProgress })

  if (response?.header?.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
