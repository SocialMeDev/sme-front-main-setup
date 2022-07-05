import { getApiUrl } from 'utils/helpers/sirVariables'

const Service = {
  File: {
    Upload: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file',
      method: 'post',
      timeout: 0
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/files',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'get',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'patch',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/file/serviceFileId',
      method: 'delete',
      timeout: '50000'
    },
    DeleteAll: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/files',
      method: 'delete',
      timeout: '50000'
    }
  },
  Form: {
    Sort: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-fields',
      method: 'patch',
      timeout: 0
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-fields',
      method: 'post',
      timeout: 0
    },
    Create: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-field',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-field/serviceFormFieldId',
      method: 'get',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-field/serviceFormFieldId',
      method: 'patch',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-field/serviceFormFieldId',
      method: 'delete',
      timeout: '50000'
    },
    DeleteAll: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/form-fields',
      method: 'delete',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/services',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'get',
    timeout: '50000'
  },
  CheckSlug: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/slug/serviceSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug',
    method: 'delete',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/publish',
    method: 'post',
    timeout: '50000'
  },
  Unpublish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/service-letter/serviceLetterSlug/service-subject/serviceSubjectSlug/service/serviceSlug/unpublish',
    method: 'post',
    timeout: '50000'
  }
}

export default Service
