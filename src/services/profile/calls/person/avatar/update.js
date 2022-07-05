import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function updateLoggedPersonAvatar({ avatarId }) {
  const params = {
    operation: ['Person', 'Avatar', 'Update'],
    urlParams: {
      avatarId
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
