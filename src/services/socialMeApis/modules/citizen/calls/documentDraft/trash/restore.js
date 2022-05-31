import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function restoreDocumentDraft({
  institutionSlug,
  documentDraftSlug
}) {
  const params = {
    operation: ['DocumentDraft', 'Trash', 'Restore'],
    urlParams: {
      institutionSlug,
      documentDraftSlug
    }
  }
  const response = await API(params)
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
