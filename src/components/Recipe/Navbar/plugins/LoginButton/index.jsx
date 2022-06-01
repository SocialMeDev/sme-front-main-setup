import { memo, Fragment, useMemo } from 'react'
import { useRouter } from 'next/router'

import { NextLink, Button } from 'components'
import {
  getAppInformation,
  getAppUrl,
  getParameterName
} from 'utils/helpers/sirVariables'
import { useAuth } from 'contexts/Auth/Provider'
import { ArrowCircleLogin } from 'components/Icons/Interface'

function LoginButton() {
  const { userPosition } = useAuth()
  const { query } = useRouter()

  const { institutionSlug } = query

  const pathToAccount = useMemo(() => {
    const pathname = getAppUrl('auth')
    let query = {}

    let hostname = 'localhost:3000'
    let protocol = 'http://'

    const domain = window.location.hostname

    if (domain !== 'localhost') {
      hostname = window.location.hostname
      protocol = 'https://'
    }

    if (institutionSlug) {
      query[getParameterName('institutionSlug')] = institutionSlug
    }
    query[getParameterName('appKey')] = getAppInformation('key')
    query[getParameterName('originPathname')] = `${protocol}${hostname}`

    return {
      pathname,
      query
    }
  }, [])

  if (userPosition !== false) {
    return <Fragment />
  }

  return (
    <NextLink href={pathToAccount}>
      <Button leftIcon={<ArrowCircleLogin />} variant="solid">
        Acessar
      </Button>
    </NextLink>
  )
}

export default memo(LoginButton)
