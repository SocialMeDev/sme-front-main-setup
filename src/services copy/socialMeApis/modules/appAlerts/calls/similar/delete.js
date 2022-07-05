import API from 'services/socialMeApis/modules/appAlerts'

import toast from 'utils/toast'

export default async function deleteTermSimilar(
	institutionSlug,
	termId,
	similarTermId
) {
	const params = {
		operation: ['Similar', 'Delete'],
		urlParams: {
			institutionSlug,
			termId,
			similarTermId
		}
	}

	const response = await API(params)

	if (response.success) {
		toast.success(response.header.title)
	} else {
		toast.error(response.header.title)
	}

	return response
}
