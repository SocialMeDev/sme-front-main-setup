import { parseCookies } from 'nookies'

export default function Get(name) {
  const { [name]: value } = parseCookies()

  return value
}
