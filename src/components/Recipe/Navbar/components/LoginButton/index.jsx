import { memo, Fragment, useMemo } from 'react'

import { NextLink, Button } from 'components'
import {
  getAppInformation,
  getAppUrl,
  getParameterName
} from 'utils/helpers/sirVariables'
import { useAuth } from 'contexts/Auth/Provider'
import { ArrowCircleLogin } from 'components/Icons/Interface'

function LoginButton() {
  const { isUserLogged } = useAuth()

  const pathToAccount = useMemo(() => {
    const pathname = getAppUrl('auth')

    let query = {}

    query[getParameterName('appKey')] = getAppInformation('key')
    query[getParameterName('originPathname')] = window.location.href

    return {
      pathname,
      query
    }
  }, [window.location])

  if (isUserLogged) return <Fragment />

  return (
    <NextLink href={pathToAccount}>
      <Button leftIcon={<ArrowCircleLogin />} variant="solid">
        Acessar
      </Button>
    </NextLink>
  )
}

export default memo(LoginButton)
