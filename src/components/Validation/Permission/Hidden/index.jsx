import { ScaleFade } from 'components'
import { useState, useCallback, useEffect, Fragment, memo } from 'react'

function HiddenPermission({
  children,
  userPermissions,
  necessaryPermissions = []
}) {
  const [isVisible, setIsVisible] = useState(false)

  const userHasNecessaryPermissions = useCallback(() => {
    return userPermissions.some(
      (item) => necessaryPermissions.includes(item),
      []
    )
  }, [userPermissions, necessaryPermissions])

  useEffect(() => {
    async function checkPermission() {
      const permited = userHasNecessaryPermissions()

      if (permited) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    if (userPermissions !== null) checkPermission()
  }, [userPermissions])

  return <Fragment>{isVisible && <ScaleFade>{children}</ScaleFade>}</Fragment>
}

export default memo(HiddenPermission)
