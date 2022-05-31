import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function createService({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  data
}) {
  const params = {
    operation: ['Service', 'Create'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug
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
