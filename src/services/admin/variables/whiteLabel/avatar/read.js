import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readWhiteLabelAvatars(whiteLabelSlug) {
  const response = await administerAPI({
    method: 'POST',
    url: `/admin/person/white-label/${whiteLabelSlug}/avatars`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
