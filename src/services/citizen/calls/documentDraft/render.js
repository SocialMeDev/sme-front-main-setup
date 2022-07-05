import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function renderDocumentDraft({
  institutionSlug,
  documentDraftSlug
}) {
  if (!institutionSlug || !documentDraftSlug) return

  const params = {
    operation: ['DocumentDraft', 'Render'],
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
