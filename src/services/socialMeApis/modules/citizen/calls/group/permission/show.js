import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listGroupPermissions({
  institutionSlug,
  groupSlug
}) {
  const params = {
    operation: ['Group', 'Permission', 'Show'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
