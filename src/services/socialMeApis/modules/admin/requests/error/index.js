import { getApiUrl } from 'utils/helpers/sirVariables'

const Error = {
  Create: {
    baseURL: getApiUrl('sme-auth'),
    url: '/admin/error/internalId',
    method: 'post',
    timeout: 50000
  }
}

export default Error
