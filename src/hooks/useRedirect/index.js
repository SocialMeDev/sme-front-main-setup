import { useRouter } from 'next/router'

export default function useRedirect({ to }) {
  const { push } = useRouter()
  return push(to)
}
