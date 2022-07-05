import API from 'services/socialMeApis/modules/appAlerts'

export default async function getAlertByStatus(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadAlertByStatus'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
