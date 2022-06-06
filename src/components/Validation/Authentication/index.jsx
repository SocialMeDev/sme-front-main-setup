import { Fragment, useEffect, memo } from 'react'
import { useRouter } from 'next/router'

import toast from 'utils/toast'
import { useAuth } from 'contexts/Auth/Provider'

function Authentication({
  children,
  setLoading,
  redirect,
  shouldBeDisconnect
}) {
  const { push } = useRouter()

  const { user, userPosition } = useAuth()

  useEffect(() => {
    setLoading(true)

    async function loadAsyncFunction() {
      const isConnected = userPosition !== false || shouldBeDisconnect === true
      const userExist = user.id

      if (!isConnected && !userExist) {
        const authMessage = shouldBeDisconnect
          ? 'Usuário já conectado'
          : 'Usuário não conectado'

        toast.error(authMessage)

        await push(redirect)
      }

      setLoading(false)
    }

    loadAsyncFunction()
  }, [user, userPosition])

  return <Fragment>{children}</Fragment>
}

export default memo(Authentication)
