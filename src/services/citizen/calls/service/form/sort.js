import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function sortServiceFormField({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  data
}) {
  const params = {
    operation: ['Service', 'Form', 'Sort'],
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
