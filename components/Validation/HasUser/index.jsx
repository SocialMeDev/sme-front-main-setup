import { useEffect, Fragment, memo } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from 'contexts/Auth/Provider'
import toast from 'utils/toast'

function HasUser({ children, redirect, setLoading }) {
  const { push } = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    async function loadAsync() {
      const userExist = Object.entries(user).length > 0

      if (!userExist) {
        toast.error('Você não tem permissão.')

        await push(redirect)
      }

      setLoading(false)
    }

    loadAsync()
  }, [user])

  return <Fragment>{children}</Fragment>
}

export default memo(HasUser)
