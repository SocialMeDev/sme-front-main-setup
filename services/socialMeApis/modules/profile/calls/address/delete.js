import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function deleteAddress(addressId) {
  const params = {
    operation: ['Address', 'Delete'],
    urlParams: {
      addressId
    }
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
