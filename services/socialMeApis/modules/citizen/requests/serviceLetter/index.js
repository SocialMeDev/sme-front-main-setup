import { getApiUrl } from 'utils/helpers/sirVariables'

const ServiceLetter = {
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/slug/serviceLetterSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default ServiceLetter
