import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readCivilState(data) {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/person/civil-states',
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
