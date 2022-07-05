import { getApiUrl } from 'utils/helpers/sirVariables'

const SocialLogin = {
  Link: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/social-network/provider/link',
    method: 'post',
    timeout: '50000'
  },
  PreLogin: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/social-network/provider/pre-login',
    method: 'post',
    timeout: '50000'
  },
  Login: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/social-network/provider/login',
    method: 'post',
    timeout: '50000'
  }
}

export default SocialLogin
