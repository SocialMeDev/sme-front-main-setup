import useEnvironment from 'hooks/useEnvironment'

function getCookies() {
  return {
    browser: useEnvironment('dev_brwsrtkn', 'brwsrtkn'),
    userPosition: useEnvironment('dev_usrpstn', 'usrpstn'),
    user: useEnvironment('dev_usrtkn', 'usrtkn'),
    acceptedCookies: useEnvironment('dev_accptcks', 'accptcks'),
    userTheme: useEnvironment('dev_usr_thm', 'usr_thm'),
    userSize: useEnvironment('dev_usr_sz', 'usr_sz')
  }
}
export default getCookies()
