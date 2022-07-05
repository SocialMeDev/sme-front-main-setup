import { getApiUrl } from 'utils/helpers/sirVariables'

const Institution = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institutions',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug',
    method: 'get',
    timeout: '50000'
  }
}

export default Institution
