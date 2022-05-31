import ResponseCodeSuccess from 'services/socialMeApis/responseCode/success'
import ResponseCodeError from 'services/socialMeApis/responseCode/error'

export default async function getCodeInformation(code) {
  let message

  if (ResponseCodeSuccess[code]) {
    message = ResponseCodeSuccess[code].message
  }

  if (message) {
    return {
      message,
      success: true
    }
  }

  if (ResponseCodeError[code]) {
    message = ResponseCodeError[code].message
  }

  return {
    message: message || 'Código não encontrado',
    success: false
  }
}
