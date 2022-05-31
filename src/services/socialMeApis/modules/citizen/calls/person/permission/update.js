import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updatePersonPermission({
  institutionSlug,
  personId,
  permission
}) {
  const params = {
    operation: ['Person', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      personId
    },
    data: {
      permission
    }
  }

  console.log(`Permission Update params`, params)

  const response = await API(params)

  console.log(`Permission Update response`, response)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
