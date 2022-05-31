import alertsApiInstance from './createInstance'

import buildRequestHeader from './buildRequestHeader'

const makeResquestToAlertsAPI = (request, url, config = {}) => {
  const instance = alertsApiInstance

  const requestConfig = Object.assign({
    headers: buildRequestHeader(request),
    ...config
  })

  async function get() {
    const response = await instance.get(url, requestConfig)

    return response.data
  }

  async function post() {
    const response = await instance.post(url, requestConfig)

    return response.data
  }

  async function patch() {
    const response = await instance.patch(url, requestConfig)

    return response.data
  }

  return {
    get,
    post,
    patch
  }
}

export default makeResquestToAlertsAPI
