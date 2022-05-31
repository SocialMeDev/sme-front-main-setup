import useEnvironment from 'hooks/useEnvironment'

function getUrlParameters() {
  return {
    appKey: useEnvironment('appky', 'appky'),
    institutionSlug: 'institutionSlug',
    originPathname: 'boomerang',
    appKeyInHeader: 'appky',
    usersTokens: 'usersTokensValues',
    userPosition: 'userPositionValue',
    provider: 'provedor'
  }
}

export default getUrlParameters()
