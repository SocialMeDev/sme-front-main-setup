import API from 'services/socialMeApis/modules/appAlerts'

export default async function getPersonBySystem(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadPersonBySystem'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
