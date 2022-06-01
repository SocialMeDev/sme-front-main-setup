import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteFileInService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  serviceFileId
}) {
  const params = {
    operation: ['Service', 'File', 'Delete'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      serviceFileId
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
