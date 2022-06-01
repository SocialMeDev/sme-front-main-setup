import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getUserGroups(institutionSlug, personId) {
	const params = {
		operation: ['User', 'Group', 'Read'],
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
