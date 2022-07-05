import { getApiUrl } from 'utils/helpers/sirVariables'

const BrowserToken = {
  Set: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/browser/login',
    method: 'get',
    timeout: '50000'
  },
  Check: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/browser/is-auth',
    method: 'get',
    timeout: '50000'
  }
}

export default BrowserToken
