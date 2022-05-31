import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getAlertsFollowUp(
	institutionSlug,
	alertId,
	data
) {
	const params = {
		operation: ['Alert', 'FollowUp', 'Read'],
		urlParams: {
			institutionSlug,
			alertId
		},
		data
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
