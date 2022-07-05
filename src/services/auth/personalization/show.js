import API from 'services/socialMeApis/modules/auth'

export default async function personalizationWithKey({ appKey }) {
  const params = {
    operation: ['Personalization', 'Show'],
    data: {
      appKey
    }
  }

  const response = await API(params)

  return response
}
