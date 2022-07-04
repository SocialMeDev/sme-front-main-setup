import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createInternalDocumentDraft(
  institutionSlug,
  data
) {
  if (!data || !institutionSlug) return

  const params = {
    operation: ['DocumentDraft', 'Create', 'Internal'],
    urlParams: {
      institutionSlug
    },
    data: data
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
