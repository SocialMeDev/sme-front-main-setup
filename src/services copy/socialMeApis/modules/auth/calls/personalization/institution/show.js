import API from 'services/socialMeApis/modules/auth'

export default async function personalizationWithInstitution(
  appKey,
  institutionSlug
) {
  const params = {
    operation: ['Personalization', 'Institution', 'Show'],
    urlParams: {
      institutionSlug
    },
    data: {
      appKey
    }
  }
  const response = await API(params)
  return response
}
