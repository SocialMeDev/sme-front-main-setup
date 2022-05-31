import possibleErrorsMessages from './possibleErrorsMessages'

function getFormattedResponseError(error) {
  const errorMessage = possibleErrorsMessages[error.message]

  let errorResponse = {
    header: {
      title: errorMessage || 'Error desconhecido',
      success: false
    }
  }

  if (error.response) {
    errorResponse = error.response.data
  }

  return errorResponse
}

export default getFormattedResponseError
