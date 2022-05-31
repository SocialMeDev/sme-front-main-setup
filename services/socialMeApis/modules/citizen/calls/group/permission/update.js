import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function listGroupPermissions({
  institutionSlug,
  groupSlug,
  permission
}) {
  const params = {
    operation: ['Group', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      groupSlug
    },
    data: {
      permission
    }
  }

  console.log(`Group Permission Update params`, params)

  const response = await API(params)

  console.log(`Group Permission Update response`, response)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
