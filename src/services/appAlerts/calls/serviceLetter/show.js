import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showServiceLetter({
  institutionSlug,
  serviceLetterSlug
}) {
  const params = {
    operation: ['ServiceLetter', 'Show'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
