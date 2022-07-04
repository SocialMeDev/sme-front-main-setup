import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function createServiceFormField({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  data
}) {
  const params = {
    operation: ['Service', 'Form', 'Create'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
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
