import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function readDocuments(data) {
  const params = {
    operation: ['Documents', 'Read'],
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
