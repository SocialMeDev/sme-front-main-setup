import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function bindApplicationsToAPI({ data, apiId }) {
  const response = await administerAPI({
    method: 'POST',
    url: `/admin/app-api/api/${apiId}/access`,
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
