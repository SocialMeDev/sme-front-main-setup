import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readWhiteLabel(data) {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/person/white-labels',
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
