import { getApiUrl } from 'utils/helpers/sirVariables'

const Reports = {
  ReadUniquePerson: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/unique-person',
    method: 'get',
    timeout: '50000'
  },
  ReadOriginPerson: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/origin-person',
    method: 'get',
    timeout: '50000'
  },
  ReadPersonBySystem: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/origin-person/system',
    method: 'get',
    timeout: '50000'
  },
  ReadOriginActivity: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/origin-activity',
    method: 'get',
    timeout: '50000'
  },
  ReadActivityBySystem: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/origin-activity/system',
    method: 'get',
    timeout: '50000'
  },
  ReadValidAlert: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/valid-alert',
    method: 'get',
    timeout: '50000'
  },
  ReadAlertByStatus: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/alert/status',
    method: 'get',
    timeout: '50000'
  },
  ReadAlertByType: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/valid-alert/type',
    method: 'get',
    timeout: '50000'
  },
  ReadAlertFollowUpByType: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/alert/follow-up/type',
    method: 'get',
    timeout: '50000'
  },
  ReadAlertFollowUpByStatus: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/temp-report/alert/follow-up/status',
    method: 'get',
    timeout: '50000'
  }
}

export default Reports
