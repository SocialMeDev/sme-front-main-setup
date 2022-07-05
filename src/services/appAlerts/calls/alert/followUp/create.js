import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function createAlertFollowUp(
	institutionSlug,
	alertId,
	data
) {
	const params = {
		operation: ['Alert', 'FollowUp', 'Create'],
		urlParams: {
			institutionSlug,
			alertId
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
