import axios from 'axios'
import prepareParameters from './functions/prepareParameters'

import treatResponseError from 'services/socialMeApis/function/treatResponseError'

async function profileAPI(paramsReceived) {
  const treatedParams = await prepareParameters(paramsReceived)

  const response = await axios(treatedParams)
    .then(async (res) => {
      const response = res.data

      response.success = response?.header?.success || false

      return response
    })
    .catch(async (error) => {
      return treatResponseError(error)
    })

  return response
}

export default profileAPI
