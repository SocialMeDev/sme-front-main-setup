import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function logout() {
  const params = {
    operation: ['User', 'Logout']
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
