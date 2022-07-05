import { getApiUrl } from 'utils/helpers/sirVariables'

const Term = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-terms',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term',
    method: 'post',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
    method: 'patch',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
    method: 'get',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
    method: 'Delete',
    timeout: '50000'
  }
}

export default Term
