import { useState, useEffect, Fragment, memo } from 'react'
import { useRouter } from 'next/router'

import { Loader } from 'components'

import toast from 'utils/toast'

function UserHasAtLeastOnePermission({ children, userPermissions, redirect }) {
  const [loading, setLoading] = useState(true)

  const { push } = useRouter()

  useEffect(() => {
    async function checkPermission() {
      const permited = userPermissions.length > 0

      if (!permited) {
        toast.error('Você não tem permissão.')

        push(redirect)
      } else {
        setLoading(false)
      }
    }

    if (userPermissions !== null) checkPermission()
  }, [userPermissions])

  return (
    <Fragment>
      {loading ? <Loader text="Carregando" /> : <Fragment>{children}</Fragment>}
    </Fragment>
  )
}

export default memo(UserHasAtLeastOnePermission)
