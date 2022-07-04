import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function uploadFileInService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  file,
  onUploadProgress
}) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['Service', 'File', 'Upload'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    },
    data
  }

  const response = await API(params, { onUploadProgress })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
