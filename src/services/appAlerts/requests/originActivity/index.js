import { getApiUrl } from 'utils/helpers/sirVariables'

const OriginActivity = {
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/origin-activity/person/uniquePersonId',
    method: 'post',
    timeout: '50000'
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/origin-activities',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/origin-activity/originActivityId',
    method: 'get',
    timeout: '50000'
  }
}

export default OriginActivity
