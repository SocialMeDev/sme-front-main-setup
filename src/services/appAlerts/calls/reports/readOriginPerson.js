import API from 'services/socialMeApis/modules/appAlerts'

export default async function getOriginPerson(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadOriginPerson'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
