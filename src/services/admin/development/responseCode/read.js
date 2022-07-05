import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readResponseCode(data) {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/response-code/response-codes',
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
