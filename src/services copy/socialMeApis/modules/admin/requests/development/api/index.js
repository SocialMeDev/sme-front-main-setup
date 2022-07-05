import { getApiUrl } from 'utils/helpers/sirVariables'

const Application = {
  GenerateKey: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/api/apiId',
    method: 'put',
    timeout: 50000
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/apis',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/api/apiId',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/api',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/api/apiId',
    method: 'patch',
    timeout: 50000
  },
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/api/apiId',
    method: 'delete',
    timeout: 50000
  },

  API: {
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/app-api/api/apiId/access',
      method: 'post',
      timeout: 50000
    },
    Bind: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/app-api/api/apiId/access',
      method: 'put',
      timeout: 50000
    }
  }
}

export default Application
