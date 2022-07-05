import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showUniquePerson(
  institutionSlug,
  uniquePersonId
) {
  const params = {
    operation: ['Person', 'Unique', 'Show'],
    urlParams: {
      institutionSlug,
      uniquePersonId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
