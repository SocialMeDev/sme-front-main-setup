import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function deleteAddress({ institutionSlug, addressSlug }) {
  const params = {
    operation: ['Address', 'Delete'],
    urlParams: {
      institutionSlug,
      addressSlug
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
