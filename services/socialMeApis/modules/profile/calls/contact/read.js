import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function readContacts(data) {
  const params = {
    operation: ['Contact', 'Read'],
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
