import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function deleteSocialSex(socialSexSlug) {
  const response = await administerAPI({
    method: 'DELETE',
    url: `/admin/person/social-sex/${socialSexSlug}`
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
