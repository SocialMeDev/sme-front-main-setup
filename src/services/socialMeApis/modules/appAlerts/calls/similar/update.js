import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function updateTermSimilar(
  institutionSlug,
  termId,
  similarTermId,
  similar
) {
  const params = {
    operation: ['Similar', 'Update'],
    urlParams: {
      institutionSlug,
      termId,
      similarTermId
    },
    data: similar
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
