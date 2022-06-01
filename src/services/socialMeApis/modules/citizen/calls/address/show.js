import API from 'services/socialMeApis/modules/citizen'

import toast from 'utils/toast'

export default async function showAddress({ institutionSlug, addressSlug }) {
  const params = {
    operation: ['Address', 'Show'],
    urlParams: {
      institutionSlug,
      addressSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
