import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteServiceFormField({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug,
  serviceFormFieldId
}) {
  const params = {
    operation: ['Service', 'Form', 'Delete'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug,
      serviceFormFieldId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
