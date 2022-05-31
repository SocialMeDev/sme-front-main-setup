import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function readDocumentDrafts(institutionSlug, data) {
  const params = {
    operation: ['DocumentDraft', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: data
  }
  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
