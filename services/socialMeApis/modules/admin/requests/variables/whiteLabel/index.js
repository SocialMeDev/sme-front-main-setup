import { getApiUrl } from 'utils/helpers/sirVariables'

const WhiteLabel = {
  Avatar: {
    Upload: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/person/white-label/whiteLabelSlug/avatar',
      method: 'post',
      timeout: 50000
    },
    Update: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/person/white-label/whiteLabelSlug/avatar/avatarId',
      method: 'patch',
      timeout: 50000
    },
    Delete: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/person/white-label/whiteLabelSlug/avatar/avatarId',
      method: 'delete',
      timeout: 50000
    },
    Read: {
      baseURL: getApiUrl('sme-auth'),
      url: '/admin/person/white-label/whiteLabelSlug/avatars',
      method: 'post',
      timeout: 50000
    }
  },
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-label/whiteLabelSlug',
    method: 'delete',
    timeout: 50000
  },
  Check: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-label/slug/whiteLabelSlug',
    method: 'get',
    timeout: 50000
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-labels',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-label/whiteLabelSlug',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-label',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/white-label/whiteLabelSlug',
    method: 'patch',
    timeout: 50000
  }
}

export default WhiteLabel
