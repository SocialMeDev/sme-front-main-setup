import { getApiUrl } from 'utils/helpers/sirVariables'

const Process = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/processing/processes',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/processing/process/processId',
    method: 'get',
    timeout: '50000'
  }
}

export default Process
