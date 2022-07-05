import { getApiUrl } from 'utils/helpers/sirVariables'

const Person = {
  Avatar: {
    Read: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/account/person/avatars',
      method: 'post',
      timeout: '50000'
    },
    Upload: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/account/person/avatar',
      method: 'post',
      timeout: '50000'
    },
    Update: {
      baseURL: getApiUrl('sme-citizen'),
      url: '/account/person/avatar/avatarId',
      method: 'patch',
      timeout: '50000'
    }
  },
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/account/person/profile',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/account/person',
    method: 'patch',
    timeout: '50000'
  }
}

export default Person
