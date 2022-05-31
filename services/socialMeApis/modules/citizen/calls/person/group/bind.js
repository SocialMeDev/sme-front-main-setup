import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function bindGroupToPerson({
  institutionSlug,
  personId,
  groupSlug
}) {
  const params = {
    operation: ['Person', 'BindGroup'],
    urlParams: {
      institutionSlug,
      groupSlug,
      personId
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
