import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function deleteCivilState(civilStateSlug) {
  const response = await administerAPI({
    method: 'DELETE',
    url: `/admin/person/civil-state/${civilStateSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
