import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function uploadLoggedPersonAvatar(file) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['Person', 'Avatar', 'Upload'],
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
