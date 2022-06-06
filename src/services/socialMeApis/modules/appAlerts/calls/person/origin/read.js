import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readOriginPersons(institutionSlug) {
  const params = {
    operation: ['Person', 'Origin', 'Read'],
    urlParams: {
      institutionSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}