import API from 'services/socialMeApis/modules/appAlerts'

export default async function checkServiceSubjectSlug({
  institutionSlug,
  serviceLetterSlug,
  serviceSubjectSlug
}) {
  const params = {
    operation: ['ServiceSubject', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug,
      serviceSubjectSlug
    }
  }

  const response = await API(params)

  return response
}
