import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showAPI(apiId) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/app-api/api/${apiId}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
