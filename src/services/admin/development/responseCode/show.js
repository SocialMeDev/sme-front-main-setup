import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showResponseCode(responseCodeId) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/response-code/response-code/${responseCodeId}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
