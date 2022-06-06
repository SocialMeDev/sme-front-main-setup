import getStatusText from './getStatusText'
import getStatusTypes from './getStatusTypes'

export default function getFormattedStatus(status, valueContext = 'text') {
  const statusValuesContext = {
    text: getStatusText,
    type: getStatusTypes
  }

  const choosedStatusValueContext = statusValuesContext[valueContext]

  return choosedStatusValueContext[status || 'ACTIVE']
}
