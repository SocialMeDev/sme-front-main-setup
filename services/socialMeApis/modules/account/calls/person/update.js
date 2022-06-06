import API from 'services/socialMeApis/modules/account'

import toast from 'utils/toast'

export default async function updatePerson(data) {
  const params = {
    operation: ['Person', 'Update'],

    data
  }

  console.log(`params`, params)

  const response = await API(params)

  console.log(`response`, response)

  if (response.header.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
