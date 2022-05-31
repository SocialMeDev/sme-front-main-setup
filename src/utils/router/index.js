function getDomain() {
  let hostname = ''

  if (typeof window !== 'undefined') {
    hostname = window.location.hostname
  }

  return hostname
}

export { getDomain }
