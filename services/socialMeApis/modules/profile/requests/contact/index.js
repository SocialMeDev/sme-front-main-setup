import { getApiUrl } from 'utils/helpers/sirVariables'

const Contact = {
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  }
}

export default Contact
