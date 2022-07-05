import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showWhiteLabel(whiteLabelSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/white-label/${whiteLabelSlug}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
