import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function uploadWhiteLabelAvatar({ file, whiteLabelSlug }) {
  const data = new FormData()

  data.append('file', file)

  const response = await administerAPI({
    method: 'POST',
    url: `/admin/person/white-label/${whiteLabelSlug}/avatar`,
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
