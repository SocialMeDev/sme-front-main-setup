import { getApiUrl } from 'utils/helpers/sirVariables'

const OrganizationUnit = {
  Permission: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/org-unit-inst/available',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/org-unit-inst',
      method: 'post',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/org-unit-inst',
      method: 'put',
      timeout: '50000'
    },
    Person: {
      Read: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/person/available',
        method: 'post',
        timeout: '50000'
      },
      Show: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/personId/org-unit/organizationUnitSlug',
        method: 'post',
        timeout: '50000'
      },
      Update: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/person/personId/org-unit/organizationUnitSlug',
        method: 'put',
        timeout: '50000'
      }
    },
    Group: {
      Read: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/permission-group/available',
        method: 'post',
        timeout: '50000'
      },
      Show: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/permission-group/groupSlug/org-unit/organizationUnitSlug',
        method: 'post',
        timeout: '50000'
      },
      Update: {
        baseURL: getApiUrl('sme-citizen'),
        url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/permission-group/groupSlug',
        method: 'put',
        timeout: '50000'
      }
    }
  },
  Person: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/local-admin/permission/org-unit/organizationUnitSlug/person',
      method: 'post',
      timeout: '50000'
    }
  },
  Group: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/permission-group/org-unit/organizationUnitSlug',
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
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationUnitSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/slug/organizationUnitSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationUnitSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationUnitSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationUnitSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/organizationUnitSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default OrganizationUnit
