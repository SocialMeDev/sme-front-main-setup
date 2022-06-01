import axios from 'axios'

import { getApiUrl } from 'utils/helpers/sirVariables'

const alertsAPI = axios.create({
  baseURL: getApiUrl('sme-app-alerts'),
  timeout: 1000
})

export default alertsAPI
