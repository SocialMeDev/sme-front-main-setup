import API from 'services/socialMeApis/modules/auth'

export default async function checkUserToken() {
  const params = {
    operation: ['User', 'CheckToken']
  }

  const response = await API(params)

  return response
}
