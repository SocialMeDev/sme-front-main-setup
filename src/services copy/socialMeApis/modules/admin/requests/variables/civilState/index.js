import { getApiUrl } from 'utils/helpers/sirVariables'

const CivilState = {
  Delete: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-state/civilStateSlug',
    method: 'delete',
    timeout: 50000
  },
  Check: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-state/slug/civilStateSlug',
    method: 'get',
    timeout: 50000
  },
  Read: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-states',
    method: 'post',
    timeout: 50000
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-state/civilStateSlug',
    method: 'get',
    timeout: 50000
  },
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-state',
    method: 'post',
    timeout: 50000
  },
  Update: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/person/civil-state/civilStateSlug',
    method: 'patch',
    timeout: 50000
  }
}

export default CivilState
