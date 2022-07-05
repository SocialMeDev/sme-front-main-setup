import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function showSocialSex(socialSexSlug) {
  const response = await administerAPI({
    method: 'GET',
    url: `/admin/person/social-sex/${socialSexSlug}`
  })

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
