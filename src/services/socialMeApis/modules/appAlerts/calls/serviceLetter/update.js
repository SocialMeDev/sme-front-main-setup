import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updateServiceLetter({
  institutionSlug,
  serviceLetterSlug,
  data
}) {
  const params = {
    operation: ['ServiceLetter', 'Update'],
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
