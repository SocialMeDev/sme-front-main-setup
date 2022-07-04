import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function updateCivilState(data, civilStateSlug) {
  const params = {
    operation: ['CivilState', 'Update'],
    urlParams: {
      civilStateSlug
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
