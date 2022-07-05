import API from 'services/socialMeApis/modules/admin'

export default async function createError(internalId, data) {
  const params = {
    operation: ['Error', 'Create'],
    urlParams: {
      internalId
    },
    data
  }

  const response = await API(params)

  return response
}
