import { getApiUrl } from 'utils/helpers/sirVariables'

const Similar = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-terms',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term',
    method: 'post',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term/similarTermId',
    method: 'patch',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similarTermId',
    method: 'get',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term/similarTermId',
    method: 'delete',
    timeout: '50000'
  }
}

export default Similar
