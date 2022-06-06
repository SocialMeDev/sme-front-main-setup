import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function uploadWhiteLabelAvatar({ file, whiteLabelSlug }) {
  const data = new FormData()

  data.append('file', file)

  const params = {
    operation: ['WhiteLabel', 'Avatar', 'Upload'],
    urlParams: {
      whiteLabelSlug
    },
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
