import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteServiceLetter({
  institutionSlug,
  serviceLetterSlug
}) {
  const params = {
    operation: ['ServiceLetter', 'Delete'],
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
