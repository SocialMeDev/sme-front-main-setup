import API from 'services/socialMeApis/modules/appAlerts'

export default async function checkServiceSlug({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug,
  serviceSlug
}) {
  const params = {
    operation: ['Service', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug,
      serviceSlug
    }
  }

  const response = await API(params)

  return response
}
