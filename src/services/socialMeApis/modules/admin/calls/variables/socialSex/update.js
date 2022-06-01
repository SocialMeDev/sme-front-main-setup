import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function updateSocialSex(data, socialSexSlug) {
  const params = {
    operation: ['SocialSex', 'Update'],
    urlParams: {
      socialSexSlug
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
