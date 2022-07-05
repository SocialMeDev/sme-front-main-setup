import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function showProcess(institutionSlug, processId) {
	const params = {
		operation: ['Process', 'Show'],
		urlParams: {
			institutionSlug,
			processId
		}
	}

	const response = await API(params)

	if (!response.success) {
		toast.error(response.header.title)
	}

	return response
}
