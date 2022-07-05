import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function deleteApplication(appId) {
  const response = await administerAPI({
    method: 'DELETE',
    url: `/admin/app-api/app/${appId}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
