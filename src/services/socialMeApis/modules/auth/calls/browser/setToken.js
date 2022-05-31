import socialMeAPI from 'services/socialMeApis/modules/auth'
import { setStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

export default async function setBrowserToken() {
  const browserCookie = await getCookieName('browser')

  const params = {
    operation: ['BrowserToken', 'Set']
  }

  const response = await socialMeAPI(params)

  if (response.success) {
    await setStorage(browserCookie, response.body.brwsrtkn)
  }
}
