import API from 'services/socialMeApis/modules/appAlerts'

export default async function getUniquePerson(institutionSlug) {
	const params = {
		operation: ['Reports', 'ReadUniquePerson'],
		urlParams: {
			institutionSlug
		}
	}

	const response = await API(params)

	return response
}
