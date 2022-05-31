import { getApiUrl } from 'utils/helpers/sirVariables'

const Bond = {
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bonds',
    method: 'post',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond/bondId',
    method: 'delete',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond/bondId',
    method: 'get',
    timeout: '50000'
  },
  Invite: {
    Create: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/invite/personId',
      method: 'post',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/invites',
      method: 'post',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/invite/personId',
      method: 'delete',
      timeout: '50000'
    }
  },
  Request: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-requests',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-request/bondRequestId',
      method: 'get',
      timeout: '50000'
    },
    Approve: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-request/bondRequestId/approve',
      method: 'post',
      timeout: '50000'
    },
    Decline: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-request/bondRequestId/decline',
      method: 'delete',
      timeout: '50000'
    }
  }
}

export default Bond
