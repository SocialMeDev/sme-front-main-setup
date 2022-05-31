import API from 'services/socialMeApis/modules/auth'
import setBrowserToken from 'services/socialMeApis/modules/auth/calls/browser/setToken'

export default async function checkBrowserToken() {
  const params = {
    operation: ['BrowserToken', 'Check']
  }

  const response = await API(params)

  if (!response.success) {
    setBrowserToken()
  }
}
