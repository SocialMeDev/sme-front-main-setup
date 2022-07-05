import { getApiUrl } from 'utils/helpers/sirVariables'

const Personalization = {
  Institution: {
    Show: {
      baseURL: getApiUrl('sme-auth'),
      url: '/auth/personalization/institutionSlug',
      method: 'get',
      timeout: 50000
    }
  },
  Show: {
    baseURL: getApiUrl('sme-auth'),
    url: '/auth/personalization',
    method: 'get',
    timeout: 50000
  }
}

export default Personalization
