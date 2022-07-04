import Request from '../requests'
import prepareHeader from './prepareHeader'
import prepareURL from './prepareURL'

export default async function prepareTheParameters(paramsReceived) {
  const { urlParams, data, operation, headers } = paramsReceived

  const { baseURL, method, url, timeout, responseType } = operation.reduce(
    (object, path) => {
      return object[path]
    },
    Request
  )

  const options = {
    headers: undefined,
    url: '',
    data,
    baseURL,
    method,
    timeout,
    responseType
  }

  if (headers) {
    options.headers = headers
  } else {
    options.headers = await prepareHeader()
  }

  if (urlParams) {
    options.url = await prepareURL(url, urlParams)
  } else {
    options.url = url
  }

  return options
}
