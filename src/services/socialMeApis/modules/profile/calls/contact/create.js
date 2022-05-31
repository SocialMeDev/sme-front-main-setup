import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function createContact(data) {
  const params = {
    operation: ['Contact', 'Create'],
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
