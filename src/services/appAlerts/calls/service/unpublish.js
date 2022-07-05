import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function unpublishService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'Unpublish'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    }
  }

  console.log(`Read params`, params)

  const response = await API(params)

  console.log(`Read response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
