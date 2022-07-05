import { getApiUrl } from 'utils/helpers/sirVariables'

const Application = {
  GenerateKey: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/app/appId',
    method: 'put',
    timeout: 50000
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/apps',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/app/appId',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/app',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/app/appId',
    method: 'patch',
    timeout: 50000
  },
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/app-api/app/appId',
    method: 'delete',
    timeout: 50000
  },
  API: {
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/app-api/app/appId/access',
      method: 'post',
      timeout: 50000
    },
    Bind: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/app-api/app/appId/access',
      method: 'put',
      timeout: 50000
    }
  }
}

export default Application
