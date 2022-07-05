import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updateDocumentDraftAttachment({
  institutionSlug,
  documentDraftSlug,
  attachmentSlug,
  data
}) {
  if (!institutionSlug || !documentDraftSlug) return

  const params = {
    operation: ['DocumentDraft', 'Attachment', 'Update'],
    urlParams: {
      institutionSlug,
      documentDraftSlug,
      attachmentSlug
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
