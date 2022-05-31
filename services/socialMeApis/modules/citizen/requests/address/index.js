import { getApiUrl } from 'utils/helpers/sirVariables'

const Address = {
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unities',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/AddressSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/org-unit/AddressSlug',
    method: 'patch',
    timeout: '50000'
  }
}

export default Address
