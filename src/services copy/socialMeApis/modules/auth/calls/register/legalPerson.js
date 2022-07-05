import API from 'services/socialMeApis/modules/auth'

import toast from 'utils/toast'

export default async function registerLegalPerson(person, white_label_id) {
  const params = {
    operation: ['Register', 'PJ'],
    data: {
      ...person,
      white_label_id
    }
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
