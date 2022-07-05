import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showCivilState(civilStateSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/civil-state/${civilStateSlug}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
