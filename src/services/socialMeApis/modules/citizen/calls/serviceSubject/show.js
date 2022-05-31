import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showServiceSubject({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug
}) {
  const params = {
    operation: ['ServiceSubject', 'Show'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
