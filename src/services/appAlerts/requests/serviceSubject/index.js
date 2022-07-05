import { getApiUrl } from 'utils/helpers/sirVariables'

const ServiceSubject = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-subjects',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/slug/serviceSubjectSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default ServiceSubject
