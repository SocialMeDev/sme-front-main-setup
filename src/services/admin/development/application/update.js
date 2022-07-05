import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateApplication({ data, appId }) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/app-api/app/${appId}`,
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
