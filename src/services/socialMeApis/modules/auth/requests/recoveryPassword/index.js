import { getApiUrl } from 'utils/helpers/sirVariables'

const RecoveryPassword = {
  SendContact: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/forgot-password',
    method: 'post',
    timeout: 50000
  },
  UpdatePassword: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/forgot-password/token/tokenId/personId',
    method: 'post',
    timeout: 50000
  },
  CheckToken: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/forgot-password/token/tokenId/personId',
    method: 'get',
    timeout: 50000
  },
  CancelToken: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/person/forgot-password/token/tokenId/personId',
    method: 'delete',
    timeout: 50000
  }
}

export default RecoveryPassword
