import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updatePersonPermission({
  institutionSlug,
  userId,
  permission
}) {
  const params = {
    operation: ['User', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      userId
    },
    data: {
      permission
    }
  }

  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
