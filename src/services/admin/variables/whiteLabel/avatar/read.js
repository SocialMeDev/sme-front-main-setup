import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function uploadWhiteLabelAvatar(whiteLabelSlug) {
  const params = {
    operation: ['WhiteLabel', 'Avatar', 'Read'],
    urlParams: {
      whiteLabelSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
