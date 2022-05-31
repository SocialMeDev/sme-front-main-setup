import { memo, useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUserInformation'
import {
  getAppInformation,
  getAppUrl,
  getParameterName
} from 'utils/helpers/sirVariables'

function LoginButton() {
  const { hasUser } = useUser()
  const user = hasUser()
  const { query, push, asPath } = useRouter()
  const { institutionSlug } = query
  const [isLoading, setIsLoading] = useState(true)
  const [href, setHref] = useState()

  useEffect(() => {
    async function buildHref() {
      const pathname = getAppUrl('auth')
      let query = {}
      let hostname = ''
      if (typeof window !== 'undefined') {
        hostname = window.location.hostname
      }
      if (institutionSlug) {
        query[getParameterName('institutionSlug')] = institutionSlug
      }
      query[getParameterName('appKey')] = getAppInformation('key')
      query[getParameterName('originPathname')] = `https://${hostname}${asPath}`
      setHref({
        pathname,
        query
      })

      setIsLoading(false)
    }
    buildHref()
  }, [])

  return (
    <Button
      display={!isLoading && user ? 'none' : 'block'}
      onClick={async () => await push(href)}
      variant="solid"
    >
      Acessar
    </Button>
  )
}

export default memo(LoginButton)
