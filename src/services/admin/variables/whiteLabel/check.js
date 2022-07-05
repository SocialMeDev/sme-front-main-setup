import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function checkWhiteLabelSlug(whiteLabelSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/white-label/slug/${whiteLabelSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
