import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function deleteTerm(institutionSlug, termId, terms) {
	const params = {
		operation: ['Term', 'Delete'],
		urlParams: {
			institutionSlug,
			termId
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
