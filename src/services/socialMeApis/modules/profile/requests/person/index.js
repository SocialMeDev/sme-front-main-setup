import { getApiUrl } from 'utils/helpers/sirVariables'

const Person = {
  Show: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/account/person/profile',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-citizen'),
    url: '/account/person/personKind',
    method: 'patch',
    timeout: '50000'
  }
}

export default Person
