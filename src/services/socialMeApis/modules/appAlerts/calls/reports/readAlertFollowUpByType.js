import API from 'services/socialMeApis/modules/appAlerts'

export default async function getAlertFollowUpByType(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadAlertFollowUpByType'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
