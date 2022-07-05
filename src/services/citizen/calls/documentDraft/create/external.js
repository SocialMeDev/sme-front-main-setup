import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createExternalDocumentDraft({
  institutionSlug,
  file,
  onUploadProgress
}) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['DocumentDraft', 'Create', 'External'],
    urlParams: {
      institutionSlug
    },
    data: data
  }

  const response = await API(params, { onUploadProgress })

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
