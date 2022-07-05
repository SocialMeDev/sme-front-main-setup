import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updateDocumentDraft({
  institutionSlug,
  documentDraftSlug,
  data
}) {
  if (!institutionSlug || !documentDraftSlug) return

  const params = {
    operation: ['DocumentDraft', 'Update'],
    urlParams: {
      institutionSlug,
      documentDraftSlug
    },
    data
  }

  const response = await API(params)
  if (response?.header?.success) {
    toast.success(response?.header?.title)
  }
  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
