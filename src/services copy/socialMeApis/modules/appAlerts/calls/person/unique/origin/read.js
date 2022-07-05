import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readOriginPersonsOfUniquePerson(
  institutionSlug,
  uniquePersonId
) {
  const params = {
    operation: ['Person', 'Unique', 'Origin', 'Read'],
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
