import statusTexts from './statusTexts'
import statusTypes from './statusTypes'

export default function getFormattedStatusText(status, valueContext = 'text') {
  const statusValuesContext = {
    text: statusTexts,
    type: statusTypes
  }

  const choosedStatusValueContext = statusValuesContext[valueContext]

  return choosedStatusValueContext[status || 'ACTIVE']
}
