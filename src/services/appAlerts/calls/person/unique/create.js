import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function createPersonUnique({ institutionSlug, data }) {
  const params = {
    operation: ['Person', 'Unique', 'Create'],
    urlParams: {
      institutionSlug
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}

export default createPersonUnique
