function getPossibleErrorsMessages() {
  return {
    'Network Error': 'Error de conexão com o servidor',
    Timeout: 'Tempo de resposta so servidor expirou',
    "Failed to execute 'open' on 'XMLHttpRequest': Invalid URL":
      'Caminho inválido'
  }
}
export default getPossibleErrorsMessages()
