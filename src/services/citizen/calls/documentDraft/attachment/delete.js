import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteDocumentDraft({
  institutionSlug,
  documentDraftSlug,
  attachmentSlug
}) {
  if (!institutionSlug || !documentDraftSlug) return

  const params = {
    operation: ['DocumentDraft', 'Attachment', 'Delete'],
    urlParams: {
      institutionSlug,
      documentDraftSlug,
      attachmentSlug
    }
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
