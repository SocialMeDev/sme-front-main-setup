import API from 'services/socialMeApis/modules/appAlerts'

export default async function getAvailableUserPermissions(institutionSlug) {
  const params = {
    operation: ['Permission', 'User', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: {
      pagination: {
        limit: 0
      }
    }
  }

  const response = await API(params)

  console.log(`Permission User Read response`, response)

  return response
}
