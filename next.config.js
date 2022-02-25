const withPWA = require('next-pwa')

module.exports = withPWA({
  trailingSlash: true,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: true
  }
})
