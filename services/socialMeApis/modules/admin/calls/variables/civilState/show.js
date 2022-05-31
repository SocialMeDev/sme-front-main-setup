import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function showCivilState(civilStateSlug) {
  const params = {
    operation: ['CivilState', 'Show'],
    urlParams: {
      civilStateSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
