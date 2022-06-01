import { getApiUrl } from 'utils/helpers/sirVariables'

const Permission = {
  User: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/available',
      method: 'post',
      timeout: '50000'
    }
  },
  Group: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/available',
      method: 'post',
      timeout: '50000'
    }
  }
}

export default Permission
