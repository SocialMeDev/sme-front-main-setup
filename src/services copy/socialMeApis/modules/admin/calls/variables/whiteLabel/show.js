import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function showWhiteLabel(whiteLabelSlug) {
  const params = {
    operation: ['WhiteLabel', 'Show'],
    urlParams: {
      whiteLabelSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
