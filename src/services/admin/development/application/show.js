import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showApplications(appId) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/app-api/app/${appId}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
