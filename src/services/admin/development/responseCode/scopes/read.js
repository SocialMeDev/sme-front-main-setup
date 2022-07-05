import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function readAPIScopes() {
  const response = await administerAPI({
    method: 'POST',
    url: '/admin/response-code/scopes',
    data: {
      pagination: {
        limit: 0
      }
    }
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
