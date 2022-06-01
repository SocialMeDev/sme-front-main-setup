import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createInternalDocumentDraftAttachment({
  institutionSlug,
  documentDraftSlug,
  data
}) {
  if (!data || !institutionSlug || !documentDraftSlug) return

  const params = {
    operation: ['DocumentDraft', 'Attachment', 'Create', 'Internal'],
    urlParams: {
      institutionSlug,
      documentDraftSlug
    },
    data: data
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
