import API from 'services/socialMeApis/modules/citizen'
import toast from 'utils/toast'

export default async function createOrganizationalUnit({
  institutionSlug,
  data
}) {
  const params = {
    operation: ['OrganizationalUnit', 'Create'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
