import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function createAlertType(institutionSlug, data) {
	const params = {
		operation: ['AlertType', 'Create'],
		urlParams: {
			institutionSlug
		},
		data
	}

	const response = await API(params)

	if (response.success) {
		toast.success(response.header.title)
	} else {
		toast.error(response.header.title)
	}

	return response
}

export default createAlertType
