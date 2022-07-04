import { getApiUrl } from 'utils/helpers/sirVariables'

const ServicePublic = {
  Institution: {
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/public-institution/institutionSlug',
      method: 'get',
      timeout: '50000'
    }
  },
  ReadServiceLetter: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/public-institution/institutionSlug/service-letters',
    method: 'post',
    timeout: '50000'
  },
  ReadServiceSubject: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/public-institution/institutionSlug/service-letter/serviceLetterSlug/service-subjects',
    method: 'post',
    timeout: '50000'
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/public-institution/institutionSlug/services',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/public-institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckInstitution: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/',
    method: 'patch',
    timeout: '50000'
  }
}

export default ServicePublic
