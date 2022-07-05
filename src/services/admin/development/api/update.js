import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateAPI({ data, apiId }) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/app-api/api/${apiId}`,
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
