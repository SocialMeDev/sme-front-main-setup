import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'Delete'],
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
