import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showOriginPersons(
  institutionSlug,
  originPersonId
) {
  const params = {
    operation: ['Person', 'Origin', 'Show'],
    urlParams: {
      institutionSlug,
      originPersonId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
