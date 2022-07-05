import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readApplications(filters) {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/app-api/apps',
    data: filters
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
