import API from 'services/socialMeApis/modules/appAlerts'

export default async function getOriginActivity(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadOriginActivity'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
