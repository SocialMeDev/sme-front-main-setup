import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Box } from 'components'
import toast from 'utils/toast'

function Validate({ children, isValid, message, redirect }) {
  const { push } = useRouter()

  useEffect(() => {
    function loadAsyncFunction() {
      if (!isValid && redirect) {
        toast.error(message)

        push(redirect)
      }
    }

    loadAsyncFunction()
  }, [])

  return <Box>{isValid ? <Box>{children}</Box> : <Box />}</Box>
}

export default memo(Validate)
