import axios from 'axios'
import prepareParameters from './functions/prepareParameters'
import treatResponseError from 'services/socialMeApis/function/treatResponseError'

async function citizenAPI(paramsReceived, extraConfigs = {}) {
  const treatedParams = await prepareParameters(paramsReceived)

  const response = await axios({ ...treatedParams, ...extraConfigs })
    .then(async (res) => {
      const response = res.data

      response.success = response.header.success || false

      return response
    })
    .catch(async (error) => {
      return treatResponseError(error)
    })

  return response
}

export default citizenAPI
