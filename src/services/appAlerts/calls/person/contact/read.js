import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function readPersonContact(institutionSlug, personId) {
	const params = {
		operation: ['Person', 'Contact'],
		urlParams: {
			institutionSlug,
			personId
		}
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
