import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function createResponseCode(data) {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/response-code/response-code',
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
