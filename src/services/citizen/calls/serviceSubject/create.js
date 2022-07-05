import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function createServiceSubject({
  institutionSlug,
  serviceLetterSlug,
  data
}) {
  const params = {
    operation: ['ServiceSubject', 'Create'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug
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
