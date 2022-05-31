import { getApiUrl } from 'utils/helpers/sirVariables'

const DocumentDraft = {
  Read: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/document-drafts',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    Internal: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/document-draft',
      method: 'post',
      timeout: '50000'
    },
    External: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/document-draft/upload',
      method: 'post',
      timeout: '50000'
    }
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug',
    method: 'patch',
    timeout: '50000'
  },
  Delete: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug',
    method: 'delete',
    timeout: '50000'
  },
  Render: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug/pdf',
    method: 'get',
    timeout: '50000'
  },
  Timeline: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug/timeline',
      method: 'post',
      timeout: '50000'
    }
  },
  Trash: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/bin/document-drafts',
      method: 'post',
      timeout: '50000'
    },
    Restore: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/me-citizen/institution/institutionSlug/document-draft/documentDraftSlug',
      method: 'post',
      timeout: '50000'
    }
  }
}

export default DocumentDraft
