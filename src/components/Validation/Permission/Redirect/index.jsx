import { useCallback, useEffect, Fragment, memo } from 'react'
import { useRouter } from 'next/router'

import toast from 'utils/toast'

function RedirectPermission({
  children,
  userPermissions,
  necessaryPermissions = [],
  redirect
}) {
  const { push } = useRouter()

  const userHasNecessaryPermissions = useCallback(
    (userPermissions) => {
      return userPermissions.some(
        (item) => necessaryPermissions.includes(item),
        []
      )
    },
    [necessaryPermissions]
  )

  useEffect(() => {
    async function checkPermission() {
      const permited = userHasNecessaryPermissions(userPermissions)

      if (!permited) {
        toast.error('Você não tem permissão.')

        await push(redirect)
      }
    }

    if (userPermissions !== null) checkPermission()
  }, [userPermissions])

  return <Fragment>{children}</Fragment>
}

export default memo(RedirectPermission)
