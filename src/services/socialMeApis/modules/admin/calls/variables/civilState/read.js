import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function readCivilState(data) {
  const params = {
    operation: ['CivilState', 'Read'],
    data
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
