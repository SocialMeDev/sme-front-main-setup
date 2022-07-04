import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function deleteLoggedPersonAvatar({ avatarId }) {
  const params = {
    operation: ['Person', 'Avatar', 'Delete'],
    urlParams: {
      avatarId
    }
  }

  console.log(`Delete params`, params)

  const response = await API(params)

  console.log(`Delete response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
