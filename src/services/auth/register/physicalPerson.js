import API from 'services/socialMeApis/modules/auth'

import toast from 'utils/toast'

export default async function registerPhysicalPerson(person, white_label_id) {
  const params = {
    operation: ['Register', 'PF'],
    data: {
      ...person,
      white_label_id
    }
  }

  console.log(`params`, params)

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
