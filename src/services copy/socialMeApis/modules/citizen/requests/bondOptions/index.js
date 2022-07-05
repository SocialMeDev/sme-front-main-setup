import { getApiUrl } from 'utils/helpers/sirVariables'

const BondOptions = {
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option',
    method: 'post',
    timeout: '50000'
  },
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-options',
    method: 'post',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId',
    method: 'delete',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId',
    method: 'get',
    timeout: '50000'
  },
  CheckPublication: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/publish',
    method: 'get',
    timeout: '50000'
  },
  Publish: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/publish',
    method: 'post',
    timeout: '50000'
  },
  Form: {
    Create: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-field',
      method: 'post',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-fields',
      method: 'post',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-field/formFieldId',
      method: 'patch',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-field/formFieldId',
      method: 'get',
      timeout: '50000'
    },
    Delete: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-field/formFieldId',
      method: 'delete',
      timeout: '50000'
    },
    DeleteAll: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-fields',
      method: 'delete',
      timeout: '50000'
    },
    Sort: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bond/bond-option/bondOptionId/form-fields',
      method: 'patch',
      timeout: '50000'
    }
  }
}

export default BondOptions
