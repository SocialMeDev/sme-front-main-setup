import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function showSocialSex(socialSexSlug) {
  const params = {
    operation: ['SocialSex', 'Show'],
    urlParams: {
      socialSexSlug
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
