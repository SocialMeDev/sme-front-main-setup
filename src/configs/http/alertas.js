import axios from 'axios'

import { getApiUrl } from 'utils/helpers/sirVariables'

import getApiDefaultHeader from './utils/getApiDefaultHeader'

const api = axios.create({
  baseURL: getApiUrl('sme-app-alerts'),
  timeout: 50000
})

async function alertspiAPI(axiosConfig) {
  const headers = await getApiDefaultHeader()

  const response = await api({ headers, ...axiosConfig })

  return response.data
}

export { alertspiAPI }
