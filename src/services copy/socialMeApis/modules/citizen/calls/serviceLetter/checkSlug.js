import API from 'services/socialMeApis/modules/citizen'

export default async function checkServiceLetterSlug({
  institutionSlug,
  serviceLetterSlug
}) {
  const params = {
    operation: ['ServiceLetter', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      serviceLetterSlug
    }
  }

  const response = await API(params)

  return response
}
