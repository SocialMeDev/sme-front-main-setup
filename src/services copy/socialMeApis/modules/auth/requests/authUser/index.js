import { getApiUrl } from 'utils/helpers/sirVariables'

const AuthUser = {
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/auth-info',
    method: 'get',
    timeout: 50000
  }
}

export default AuthUser
