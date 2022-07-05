import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function getTerms(institutionSlug, filters) {
	const params = {
		operation: ['Term', 'Read'],
		urlParams: {
			institutionSlug
		},
		data: filters
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
