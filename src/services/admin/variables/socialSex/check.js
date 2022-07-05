import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function checkSocialSexSlug(socialSexSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/social-sex/slug/${socialSexSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
