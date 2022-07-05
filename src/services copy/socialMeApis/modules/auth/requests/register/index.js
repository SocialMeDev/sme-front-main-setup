import { getApiUrl } from 'utils/helpers/sirVariables'

const Register = {
  PF: {
    baseURL: getApiUrl('sme-auth'),
    url: '/account/person/register/pf',
    method: 'post',
    timeout: 50000
  },
  PJ: {
    baseURL: getApiUrl('sme-auth'),
    url: '/account/person/register/pj',
    method: 'post',
    timeout: 50000
  }
}

export default Register
