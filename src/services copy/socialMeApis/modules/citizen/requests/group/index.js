import { getApiUrl } from 'utils/helpers/sirVariables'

const Group = {
  OrganizationUnit: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/org-unities/permission-group/groupSlug',
      method: 'post',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-groups',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug',
    method: 'delete',
    timeout: '50000'
  },
  Permission: {
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/permission-group/groupSlug/local-inst',
      method: 'put',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/permission-group/local-inst/available',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/permission-group/groupSlug/local-inst',
      method: 'post',
      timeout: '50000'
    }
  },
  User: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug/person',
      method: 'post',
      timeout: '50000'
    },
    Available: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug/person/eligible',
      method: 'post',
      timeout: '50000'
    }
  }
}

export default Group
