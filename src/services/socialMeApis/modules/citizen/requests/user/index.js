import { getApiUrl } from 'utils/helpers/sirVariables'

const User = {
  OrganizationUnit: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/org-unities/person/userId',
      method: 'post',
      timeout: '50000'
    }
  },
  SearchOnSocialMe: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/global/people',
    method: 'post',
    timeout: '50000'
  },
  SearchInInstitution: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/local/people',
    method: 'post',
    timeout: '50000'
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/local-inst',
    method: 'post',
    timeout: '50000'
  },
  ReadGroups: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/person/userId',
    method: 'post',
    timeout: '50000'
  },
  BindGroup: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug/person/userId',
    method: 'post',
    timeout: '50000'
  },
  UnbindGroup: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/permission-group/groupSlug/person/userId',
    method: 'delete',
    timeout: '50000'
  },
  Permission: {
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/local-inst/userId',
      method: 'put',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/local-inst/available',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/local-inst/userId',
      method: 'post',
      timeout: '50000'
    }
  }
}

export default User
