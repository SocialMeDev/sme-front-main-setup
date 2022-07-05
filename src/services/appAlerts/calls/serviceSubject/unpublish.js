import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function unpublishServiceSubject({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug
}) {
  const params = {
    operation: ['ServiceSubject', 'Unpublish'],
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
