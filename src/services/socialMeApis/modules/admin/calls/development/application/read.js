import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function readApplications(filters) {
  const params = {
    operation: ['Application', 'Read'],
    data: filters
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
