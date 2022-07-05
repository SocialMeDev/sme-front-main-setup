import API from 'services/socialMeApis/modules/auth'

export default async function preLogin(login = '') {
  const params = {
    operation: ['User', 'PreLogin'],
    data: {
      login: login.replace(/\D/g, '')
    }
  }

  const response = await API(params)

  return response
}
