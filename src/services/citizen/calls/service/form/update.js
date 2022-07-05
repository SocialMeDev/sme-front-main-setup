import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateServiceFormField({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  serviceFormFieldId,
  data
}) {
  const params = {
    operation: ['Service', 'Form', 'Update'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      serviceFormFieldId
    },
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
