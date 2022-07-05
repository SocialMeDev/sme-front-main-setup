import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function publishService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'Publish'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    }
  }

  console.log(`Publish params`, params)

  const response = await API(params)

  console.log(`Publish response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
