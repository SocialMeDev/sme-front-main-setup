import { memo, useEffect } from 'react'

import { useRouter } from 'next/router'

import toast from 'utils/toast'

function Validate({ children, isValid, message, redirect }) {
  const { push } = useRouter()

  useEffect(() => {
    async function loadAsyncFunction() {
      if (!isValid && redirect) {
        toast.error(message)
        await push(redirect)
      }
    }

    loadAsyncFunction()
  }, [])

  return isValid ? <div>{children}</div> : <div />
}

export default memo(Validate)
