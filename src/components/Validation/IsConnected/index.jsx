import { Fragment, useEffect, memo } from 'react'
import { useRouter } from 'next/router'

import toast from 'utils/toast'
import { useAuth } from 'contexts/Auth/Provider'

function IsConnected({ children, setLoading, redirect }) {
  const { push } = useRouter()

  const { isUserLogged } = useAuth()

  useEffect(() => {
    async function loadAsyncFunction() {
      if (!isUserLogged) {
        toast.error('Usuário não está conectado')

        await push(redirect)
      }

      setLoading(false)
    }

    loadAsyncFunction()
  }, [])

  return <Fragment>{children}</Fragment>
}

export default memo(IsConnected)
