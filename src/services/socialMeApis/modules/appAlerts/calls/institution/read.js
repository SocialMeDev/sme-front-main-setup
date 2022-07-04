import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getInstitution() {
	const params = {
		operation: ['Institution', 'Read'],
		data: {
			pagination: {
				limit: 0
			}
		}
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
