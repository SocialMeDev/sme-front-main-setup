import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function deleteWhiteLabelAvatar({
  whiteLabelSlug,
  avatarId
}) {
  const params = {
    operation: ['WhiteLabel', 'Avatar', 'Delete'],
    urlParams: {
      whiteLabelSlug,
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
