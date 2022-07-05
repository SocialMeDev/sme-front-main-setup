import { getApiUrl } from 'utils/helpers/sirVariables'

const Service = {
  File: {
    Upload: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file',
      method: 'post',
      timeout: 0
    },
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/files',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'get',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'patch',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'delete',
      timeout: '50000'
    },
    DeleteAll: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/files',
      method: 'delete',
      timeout: '50000'
    }
  },
  Place: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/places',
      method: 'post',
      timeout: '500000'
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/place/placeId',
      method: 'get',
      timeout: '50000'
    },
    Unbind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/place/placeId',
      method: 'delete',
      timeout: '50000'
    },
    Bind: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/place/placeId',
      method: 'post',
      timeout: '50000'
    },
    ListServices: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/place/placeId/services',
      method: 'post',
      timeout: '500000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/services',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/slug/serviceSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default Service
