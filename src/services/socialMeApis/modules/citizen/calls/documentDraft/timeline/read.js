import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readTimeline({
  institutionSlug,
  documentDraftSlug,
  data
}) {

  const params = {
    operation: ['DocumentDraft', 'Timeline', 'Read'],
    urlParams: {
      institutionSlug,
      documentDraftSlug
    },
    data: data
  }

  const response = await API(params)

  if (!response.header.success) {

    toast.error(response.header.title)
  }

  return response
}
