import { getApiUrl } from 'utils/helpers/sirVariables'

const OrganizationalUnit = {
  Permission: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/org-unit-inst/available',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/org-unit-inst',
      method: 'post',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/org-unit-inst',
      method: 'put',
      timeout: '50000'
    },
    User: {
      Read: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/person/available',
        method: 'post',
        timeout: '50000'
      },
      Show: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/userId/org-unit/organizationalUnitSlug',
        method: 'post',
        timeout: '50000'
      },
      Update: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/person/userId',
        method: 'put',
        timeout: '50000'
      }
    },
    Group: {
      Read: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/permission-group/available',
        method: 'post',
        timeout: '50000'
      },
      Show: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/permission-group/groupSlug/org-unit/organizationalUnitSlug',
        method: 'post',
        timeout: '50000'
      },
      Update: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/permission-group/groupSlug',
        method: 'put',
        timeout: '50000'
      }
    }
  },
  User: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationalUnitSlug/person',
      method: 'post',
      timeout: '50000'
    }
  },
  Group: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/permission-group/org-unit/organizationalUnitSlug',
      method: 'post',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unities',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationalUnitSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/slug/organizationalUnitSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationalUnitSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationalUnitSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationalUnitSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationalUnitSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default OrganizationalUnit
