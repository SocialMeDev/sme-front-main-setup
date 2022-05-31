import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function showContact(contactId) {
  const params = {
    operation: ['Contact', 'Show'],
    urlParams: {
      contactId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
