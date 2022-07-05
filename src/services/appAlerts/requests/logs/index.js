import { getApiUrl } from 'utils/helpers/sirVariables'

const Log = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/log/requests',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/log/request/logId',
    method: 'get',
    timeout: '50000'
  }
}

export default Log
