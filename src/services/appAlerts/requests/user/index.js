import { getApiUrl } from 'utils/helpers/sirVariables'

const User = {
  Group: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/permission-group/person/personId',
      method: 'post',
      timeout: '50000'
    }
  },
  Place: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/person/personId/places',
      method: 'post',
      timeout: '500000'
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/place/placeId/person/personId',
      method: 'get',
      timeout: '50000'
    },
    Unbind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/place/placeId/person/personId',
      method: 'delete',
      timeout: '50000'
    },
    Bind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/place/placeId/person/personId',
      method: 'post',
      timeout: '50000'
    }
  },
  Permission: {
    Admin: {
      Show: {
        baseURL: getApiUrl('sme-app-alerts'),
        url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/personId',
        method: 'post',
        timeout: '50000'
      }
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/permissions',
      method: 'post',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/personId',
      method: 'put',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/eligible',
    method: 'post',
    timeout: '50000'
  },
  LinkedUser: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst',
    method: 'post',
    timeout: '50000'
  }
}

export default User
