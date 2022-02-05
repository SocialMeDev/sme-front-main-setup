const withPWA = require('next-pwa')

module.exports = withPWA({
  trailingSlash: true,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: true
    // disable: process.env.NODE_ENV === 'development'
  }
})
