import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listAvailablePermissionsForGroups({
  institutionSlug
}) {
  const params = {
    operation: ['Group', 'Permission', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  console.log(`Group Permission Read params`, params)

  const response = await API(params)

  console.log(`Group Permission Read response`, response)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
