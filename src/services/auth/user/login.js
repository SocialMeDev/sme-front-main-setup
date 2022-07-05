import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function login({ login, password, keep }) {
  const params = {
    operation: ['User', 'Login'],
    data: {
      login: login.replace(/\D/g, ''),
      password,
      keep
    }
  }

  const response = await API(params)

  if (!response?.header?.success) {
    toast.error(response?.header?.title)
  }

  return response
}
