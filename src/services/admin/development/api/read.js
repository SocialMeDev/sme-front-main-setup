import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readAPI(data) {
  const response = await administerAPI({
    method: 'GET',
    url: '/admin/app-api/apis',
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
