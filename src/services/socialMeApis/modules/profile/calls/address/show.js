import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function showAddress(addressId) {
  const params = {
    operation: ['Address', 'Show'],
    urlParams: {
      addressId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
