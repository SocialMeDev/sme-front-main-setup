import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateResponseCode({ data, responseCodeId }) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/response-code/response-code/${responseCodeId}`,
    data
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
