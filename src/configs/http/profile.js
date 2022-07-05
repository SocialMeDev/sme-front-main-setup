import axios from 'axios'

import { getApiUrl } from 'utils/helpers/sirVariables'

import getApiDefaultHeader from './utils/getApiDefaultHeader'

const api = axios.create({
  baseURL: getApiUrl('sme-profile'),
  timeout: 50000
})

async function profileAPI(axiosConfig) {
  const headers = await getApiDefaultHeader()

  const response = await api({ headers, ...axiosConfig })

  return response.data
}

export { profileAPI }
