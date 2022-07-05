import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function bindAPIsToApplication(appId) {
  const response = await administerAPI({
    method: 'PUT',
    url: `/admin/app-api/app/${appId}/access`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
