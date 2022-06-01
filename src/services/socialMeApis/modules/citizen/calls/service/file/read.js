import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readFiles({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  filters
}) {
  const params = {
    operation: ['Service', 'File', 'Read'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
