import useEnvironment from 'hooks/useEnvironment'

function getApiUrls() {
  return {
    'sme-account': useEnvironment(
      'https://sme.dataworld.api.socialme.com.br/v1',
      'https://sme.dataworld.api.socialme.com.br/v1'
    ),
    'sme-auth': useEnvironment(
      'https://sme.dataworld.api.socialme.com.br/v1',
      'https://sme.dataworld.api.socialme.com.br/v1'
    ),
    'sme-profile': useEnvironment(
      'https://sme.dataworld.api.socialme.com.br/v1',
      'https://sme.dataworld.api.socialme.com.br/v1'
    ),
    'sme-app-alerts': useEnvironment(
      'https://sme.dataworld.api.socialme.com.br/v1',
      'https://sme.dataworld.api.socialme.com.br/v1'
    ),
    'sme-citizen': useEnvironment(
      'https://sme.dataworld.api.socialme.com.br/v1',
      'https://sme.dataworld.api.socialme.com.br/v1'
    )
  }
}

export default getApiUrls()
