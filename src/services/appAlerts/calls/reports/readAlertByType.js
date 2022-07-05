import API from 'services/socialMeApis/modules/appAlerts'

export default async function getAlertByType(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadAlertByType'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
