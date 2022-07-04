import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function unpublishServiceLetter({
  institutionSlug,
  serviceLetterSlug
}) {
  const params = {
    operation: ['ServiceLetter', 'Unpublish'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug
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
