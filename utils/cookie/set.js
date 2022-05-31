import { setCookie } from 'nookies'

import { getDomain } from 'utils/router'

export default async function Create({ key, value }) {
  const domain = getDomain()

  setCookie(undefined, key, value, {
    domain,
    maxAge: 60 * 60 * 24 * 30 * 12,
    path: '/'
  })

  return true
}
