import axios from 'axios'

import getAPIDefaultHeader from './utils/getAPIDefaultHeader'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CITIZEN_URL,
  timeout: 50000
})

export default async function citizenAPI(axiosConfig) {
  const headers = await getAPIDefaultHeader()

  return api({ headers, ...axiosConfig })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error.response.data
    })
}
