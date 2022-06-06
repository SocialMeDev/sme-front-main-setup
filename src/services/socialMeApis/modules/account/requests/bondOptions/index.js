import { getApiUrl } from 'utils/helpers/sirVariables'

const BondOptions = {
  Read: {
    baseURL: getApiUrl('sme-account'),
    url: '/account/bond/bond-options',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-account'),
    url: '/account/bond/bond-option/bondOptionId',
    method: 'get',
    timeout: '50000'
  }
}

export default BondOptions
