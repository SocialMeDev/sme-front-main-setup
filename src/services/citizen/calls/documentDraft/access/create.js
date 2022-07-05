import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createDocumentDraftAccess({
  institutionSlug,
  documentDraftSlug,
  personId,
  data
}) {
  if (!data || !institutionSlug) return

  const params = {
    operation: ['DocumentDraft', 'Access', 'Create'],
    urlParams: {
      institutionSlug,
      documentDraftSlug,
      personId
    },
    data: data
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
