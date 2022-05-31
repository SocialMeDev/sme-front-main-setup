import API from 'services/socialMeApis/modules/appAlerts'

async function checkAlertTypeSlug(institutionSlug, alertTypeSlug) {
  const params = {
    operation: ['AlertType', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      alertTypeSlug
    }
  }

  const response = await API(params)

  return response
}

export default checkAlertTypeSlug
