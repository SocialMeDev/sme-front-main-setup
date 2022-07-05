import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createExternalDocumentDraftAttachment({
  institutionSlug,
  documentDraftSlug,
  file,
  onUploadProgress
}) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['DocumentDraft', 'Attachment', 'Create', 'External'],
    urlParams: {
      institutionSlug,
      documentDraftSlug
    },
    data: data
  }

  const response = await API(params, { onUploadProgress })

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
