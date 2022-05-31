import { getApiUrl } from 'utils/helpers/sirVariables'

const SocialSex = {
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sex/socialSexSlug',
    method: 'delete',
    timeout: 50000
  },
  Check: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sex/slug/socialSexSlug',
    method: 'get',
    timeout: 50000
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sexes',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sex/socialSexSlug',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sex',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/social-sex/socialSexSlug',
    method: 'patch',
    timeout: 50000
  }
}

export default SocialSex
