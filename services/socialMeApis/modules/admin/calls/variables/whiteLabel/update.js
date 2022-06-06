import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function updateWhiteLabel({ data, whiteLabelSlug }) {
  const params = {
    operation: ['WhiteLabel', 'Update'],
    urlParams: {
      whiteLabelSlug
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
