import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function createTerms(institutionSlug, terms) {
	const params = {
		operation: ['Term', 'Create'],
		urlParams: {
			institutionSlug
		},
		data: terms
	}

	const response = await API(params)

	if (response.success) {
		toast.success(response.header.title)
	} else {
		toast.error(response.header.title)
	}

	return response
}
