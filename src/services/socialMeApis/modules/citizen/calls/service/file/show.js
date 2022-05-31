import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showFileInService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  serviceFileId
}) {
  const params = {
    operation: ['Service', 'File', 'Show'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      serviceFileId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
