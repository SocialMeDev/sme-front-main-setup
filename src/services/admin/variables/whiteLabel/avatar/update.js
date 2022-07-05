import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateWhiteLabelAvatar({
  whiteLabelSlug,
  avatarId
}) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/person/white-label/${whiteLabelSlug}/avatar/${avatarId}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
