import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateCivilState({ data, civilStateSlug }) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/person/civil-state/${civilStateSlug}`,
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
