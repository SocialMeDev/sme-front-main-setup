import API from 'services/socialMeApis/modules/appAlerts'

export default async function checkSlugActivityType({
  institutionSlug,
  activityTypeSlug
}) {
  const params = {
    operation: ['ActivityType', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      activityTypeSlug
    }
  }

  const response = await API(params)

  return response
}
