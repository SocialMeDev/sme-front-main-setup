import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteAllFileInService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'Form', 'DeleteAll'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
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
