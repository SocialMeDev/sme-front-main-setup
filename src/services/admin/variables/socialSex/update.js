import administerAPI from 'configs/http/administer'

import toast from 'utils/toast'

export default async function updateSocialSex({ data, socialSexSlug }) {
  const response = await administerAPI({
    method: 'PATCH',
    url: `/admin/person/social-sex/${socialSexSlug}`,
    data
  })

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
