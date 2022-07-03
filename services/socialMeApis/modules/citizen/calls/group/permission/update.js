import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function updatetGroupPermissions({
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

  const response = await API(params)

  if (response?.header?.success) {
    toast.success(response?.header?.title)
  } else {
    toast.error(response?.header?.title)
  }

  return response
}
