import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function readLoggedPersonAvatars() {
  const params = {
    operation: ['Person', 'Avatar', 'Read']
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
