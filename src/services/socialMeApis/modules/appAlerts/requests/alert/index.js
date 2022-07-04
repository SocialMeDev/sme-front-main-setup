import { getApiUrl } from 'utils/helpers/sirVariables'

const Alert = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/alert/alerts',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/alert/alertId',
    method: 'get',
    timeout: '50000'
  },
  FollowUp: {
    Create: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-up',
      method: 'post',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-ups',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-up/followUpId',
      method: 'get',
      timeout: '50000'
    }
  }
}

export default Alert
