import { getApiUrl } from 'utils/helpers/sirVariables'

const AlertType = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-types',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'delete',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type',
    method: 'post',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/slug/alertTypeSlug',
    method: 'get',
    timeout: '50000'
  }
}

export default AlertType
