import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function deleteWhiteLabel(whiteLabelSlug) {
  const response = await administerAPI({
    method: 'DELETE',
    url: `/admin/person/white-label/${whiteLabelSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
