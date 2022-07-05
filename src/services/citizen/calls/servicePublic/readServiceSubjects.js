import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function readServiceSubjects({
  institutionSlug,
  serviceLetterSlug
}) {
  const params = {
    operation: ['ServicePublic', 'ReadServiceSubject'],
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
