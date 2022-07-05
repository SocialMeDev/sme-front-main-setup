import { getApiUrl } from 'utils/helpers/sirVariables'

const Place = {
  User: {
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/place/placeId/people',
      method: 'post',
      timeout: '50000'
    }
  },
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/places',
    method: 'post',
    timeout: '50000'
  },
  Create: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/place',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/place/placeId',
    method: 'get',
    timeout: '50000'
  },
  Update: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/place/placeId',
    method: 'patch',
    timeout: '50000'
  }
}

export default Place
