import { getApiUrl } from 'utils/helpers/sirVariables'

const Person = {
  Read: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/person',
    method: 'post',
    timeout: '50000'
  },
  Show: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/institutionSlug/person/personId/origin-person',
    method: 'get',
    timeout: '50000'
  },
  Origin: {
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/origin-person/originPersonId',
      method: 'get',
      timeout: '50000'
    },
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/origin-people',
      method: 'post',
      timeout: '50000'
    }
  },
  Document: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/person/personId/origin-person/document',
    method: 'post',
    timeout: '50000'
  },
  Contact: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/person/personId/origin-person/contact',
    method: 'post',
    timeout: '50000'
  },
  Address: {
    baseURL: getApiUrl('sme-app-alerts'),
    url: '/alerts/institution/institutionSlug/person/personId/origin-person/address',
    method: 'post',
    timeout: '50000'
  },
  Unique: {
    Create: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/person/',
      method: 'post',
      timeout: '50000'
    },
    Origin: {
      Read: {
        baseURL: getApiUrl('sme-app-alerts'),
        url: '/alerts/institution/institutionSlug/person/uniquePersonId/origin-person',
        method: 'post',
        timeout: '50000'
      }
    },
    Read: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/people',
      method: 'post',
      timeout: '50000'
    },
    Show: {
      baseURL: getApiUrl('sme-app-alerts'),
      url: '/alerts/institution/institutionSlug/person/uniquePersonId',
      method: 'get',
      timeout: '50000'
    }
  },
  Place: {
    Read: {
      PersonPlaces: {
        baseURL: getApiUrl('sme-app-alerts'),
        url: '/alerts/institution/institutionSlug/person/personId/places',
        method: 'post',
        timeout: '50000'
      }
    }
  }
}

export default Person
