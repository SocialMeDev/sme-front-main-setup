import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function checkCivilStateSlug(civilStateSlug) {
  const params = {
    operation: ['CivilState', 'Delete'],
    urlParams: {
      civilStateSlug
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
