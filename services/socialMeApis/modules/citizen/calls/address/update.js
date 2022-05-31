import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function updateAddress({
  institutionSlug,
  addressSlug,
  data
}) {
  const params = {
    operation: ['Address', 'Update'],
    urlParams: {
      institutionSlug,
      addressSlug
    },
    data
  }

  const response = await API(params)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
