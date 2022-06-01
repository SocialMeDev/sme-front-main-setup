import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

async function deleteAlertType(institutionSlug, alertTypeSlug) {
	const params = {
		operation: ['AlertType', 'Delete'],
		urlParams: {
			institutionSlug,
			alertTypeSlug
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

export default deleteAlertType
