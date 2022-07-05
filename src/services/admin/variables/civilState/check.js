import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function checkCivilStateSlug(civilStateSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/civil-state/slug/${civilStateSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
