import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function deleteDocumentDraftAccess({
  institutionSlug,
  documentDraftSlug,
  personId
}) {
  if (!documentDraftSlug || !institutionSlug) return

  const params = {
    operation: ['DocumentDraft', 'Access', 'Delete'],
    urlParams: {
      institutionSlug,
      documentDraftSlug,
      personId
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
