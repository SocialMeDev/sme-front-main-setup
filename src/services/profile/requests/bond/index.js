import { getApiUrl } from 'utils/helpers/sirVariables'

const Bond = {
  Read: {
    baseURL: getApiUrl('sme-account'),
    url: '/account/bond/bonds',
    method: 'post',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-account'),
    url: '/account/bond/bond/bondId',
    method: 'delete',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-account'),
    url: '/account/bond/bond/bondId',
    method: 'get',
    timeout: '50000'
  },
  Invite: {
    Read: {
      baseURL: getApiUrl('sme-account'),
      url: '/account/bond/invites',
      method: 'post',
      timeout: '50000'
    }
  },
  Request: {
    Create: {
      baseURL: getApiUrl('sme-account'),
      url: '/account/bond/bond-option/bondOptionId/request',
      method: 'post',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-account'),
      url: '/account/bond/bond-requests',
      method: 'post',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-account'),
      url: '/account/bond/bond-request/bondRequestId',
      method: 'delete',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-account'),
      url: '/account/bond/bond-request/bondRequestId',
      method: 'get',
      timeout: '50000'
    }
  }
}

export default Bond
