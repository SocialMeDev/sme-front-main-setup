import API from 'services/socialMeApis/modules/profile'

import toast from 'utils/toast'

export default async function showDocument(documentId) {
  const params = {
    operation: ['Document', 'Show'],
    urlParams: {
      documentId
    }
  }

  const response = await API(params)

  if (!response.header.success) {
    toast.error(response.header.title)
  }

  return response
}
