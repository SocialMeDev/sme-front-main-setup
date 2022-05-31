import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showAlert(institutionSlug, alertId) {
	const params = {
		operation: ['Alert', 'Show'],
		urlParams: {
			institutionSlug,
			alertId
		}
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
