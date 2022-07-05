import { getApiUrl } from 'utils/helpers/sirVariables'

const ResponseCode = {
  HttpCode: {
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/response-code/http-codes',
      method: 'post',
      timeout: 50000
    }
  },
  System: {
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/response-code/systems',
      method: 'post',
      timeout: 50000
    }
  },
  Scope: {
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/response-code/scopes',
      method: 'post',
      timeout: 50000
    }
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/response-code/response-codes',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/response-code/response-code/responseCodeId',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/response-code/response-code',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/response-code/response-code/responseCodeId',
    method: 'patch',
    timeout: 50000
  },
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/response-code/response-code/responseCodeId',
    method: 'delete',
    timeout: 50000
  }
}

export default ResponseCode
