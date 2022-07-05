import { getApiUrl } from 'utils/helpers/sirVariables'

const ResponsibleAgent = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/alert/alertId/follow-up/responsible-agent',
    method: 'post',
    timeout: '50000'
  }
}

export default ResponsibleAgent
