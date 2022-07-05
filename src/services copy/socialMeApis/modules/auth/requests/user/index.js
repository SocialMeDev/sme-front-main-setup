import { getApiUrl } from 'utils/helpers/sirVariables'

const User = {
  CheckToken: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/is-auth',
    method: 'get',
    timeout: '50000'
  },
  PreLogin: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/pre-login',
    method: 'post',
    timeout: 50000
  },
  Login: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/login',
    method: 'post',
    timeout: '50000'
  },
  Logout: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/logout',
    method: 'delete',
    timeout: '50000'
  }
}

export default User
