import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function uploadLoggedPersonAvatar(file) {
  console.log(`file`, file)

  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['Person', 'Avatar', 'Upload'],
    data
  }

  console.log(`Upload params`, params)

  const response = await API(params)

  console.log(`Upload response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
