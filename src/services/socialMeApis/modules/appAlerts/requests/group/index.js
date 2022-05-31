import { getApiUrl } from 'utils/helpers/sirVariables'

const Group = {
  Permission: {
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/slug/groupSlug',
      method: 'post',
      timeout: '50000'
    },

    Update: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/groupSlug',
      method: 'put',
      timeout: '50000'
    }
  },
  User: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person',
      method: 'post',
      timeout: '50000'
    },
    Bind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person/personId',
      method: 'post',
      timeout: '50000'
    },
    Unbind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person/personId',
      method: 'delete',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/permission-groups',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/permission-group',
    method: 'post',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/permission-group/groupSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/permission-group/groupSlug',
    method: 'delete',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/permission-group/groupSlug',
    method: 'get',
    timeout: '50000'
  }
}

export default Group
