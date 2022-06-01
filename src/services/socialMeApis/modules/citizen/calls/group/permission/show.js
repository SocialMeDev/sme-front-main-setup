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

  console.log(`Group Permission Show params`, params)

  const response = await API(params)

  console.log(`Group Permission Show response`, response)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
