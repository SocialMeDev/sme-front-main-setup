import { getApiUrl } from 'utils/helpers/sirVariables'

const ActivityType = {
  Service: {
    Bind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/activity-type/activityTypeSlug/service/serviceSlug',
      method: 'post',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/activity-types',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/activity-type',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/activity-type/activityTypeSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/activity-type/activityTypeSlug',
    method: 'patch',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/activity-type/slug/activityTypeSlug',
    method: 'get',
    timeout: '50000'
  }
}

export default ActivityType
