import API from 'services/socialMeApis/modules/appAlerts'

export default async function getAlertFollowUpByStatus(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadAlertFollowUpByStatus'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
