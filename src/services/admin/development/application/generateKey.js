import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function generateApplicationKey(appId) {
  const response = await administerAPI({
    method: 'POST',
    url: `/admin/app-api/app/${appId}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
