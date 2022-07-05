import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function showAlertType(institutionSlug, alertTypeSlug) {
	const params = {
		operation: ['AlertType', 'Show'],
		urlParams: {
			institutionSlug,
			alertTypeSlug
		}
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}

export default showAlertType
