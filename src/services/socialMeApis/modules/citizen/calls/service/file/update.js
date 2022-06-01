import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateFileInService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  serviceFileId,
  data
}) {
  const params = {
    operation: ['Service', 'File', 'Update'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      serviceFileId
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
