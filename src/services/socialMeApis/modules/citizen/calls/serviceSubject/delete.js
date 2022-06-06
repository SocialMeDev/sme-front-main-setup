import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteServiceSubject({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug
}) {
  const params = {
    operation: ['ServiceSubject', 'Delete'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug
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