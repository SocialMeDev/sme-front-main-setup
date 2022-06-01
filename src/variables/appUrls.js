import useEnvironment from 'hooks/useEnvironment'

function getAppUrls() {
  return {
    citizen: useEnvironment(
      'http://localhost:3000',
      'https://main.doc63w3f6x8lf.amplifyapp.com/'
    ),
    appAlerts: useEnvironment(
      'http://localhost:3000',
      'https://app.alertaspi.io'
    ),
    admin: useEnvironment(
      'http://localhost:3000',
      'https://admin.socialme.com.br'
    ),
    auth: useEnvironment(
      'https://contas.socialme.com.br',
      'https://contas.socialme.com.br'
    ),
    profile: useEnvironment(
      'https://perfil.socialme.com.br',
      'https://perfil.socialme.com.br'
    )
  }
}

export default getAppUrls()
