import API from 'services/socialMeApis/modules/admin'

import toast from 'utils/toast'

export default async function bindAPIsToApplication(access, appId) {
  const params = {
    operation: ['Application', 'API', 'Bind'],
    urlParams: {
      appId
    },
    data: {
      access
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
