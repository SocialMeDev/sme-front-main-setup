import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readAPIsThatCanBindToApplication(appId) {
  const response = await administerAPI({
    method: 'POST',
    url: `/admin/app-api/app/${appId}/access`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
