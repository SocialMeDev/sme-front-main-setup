import API from 'services/socialMeApis/modules/appAlerts'

export default async function getActivityBySystem(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadActivityBySystem'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
