import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function showPerson(personId) {
  const params = {
    operation: ['Person', 'Show'],
    urlParams: {
      personId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
