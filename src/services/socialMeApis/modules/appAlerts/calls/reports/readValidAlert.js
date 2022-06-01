import API from 'services/socialMeApis/modules/appAlerts'

export default async function getValidAlert(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadValidAlert'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
