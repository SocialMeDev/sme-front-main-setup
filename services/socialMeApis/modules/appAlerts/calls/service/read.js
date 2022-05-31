import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readServices({ institutionSlug, filters }) {
  const params = {
    operation: ['Service', 'Read'],
    urlParams: {
      institutionSlug
    },
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
