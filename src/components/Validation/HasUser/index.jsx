import { useState, useEffect, memo } from 'react'
import { Box } from 'components'

import { useAuth } from 'contexts/Auth/Provider'
import { Validate } from 'components'

function HasUser({ children, redirect }) {
  const [loading, setLoading] = useState(true)
  const [userExist, setUserExist] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    async function loadAsync() {
      const userExist = Object.entries(user).length > 0

      if (userExist) {
        setUserExist(true)
      } else {
        setUserExist(false)
      }

      setLoading(false)
    }

    loadAsync()
  }, [user])

  return (
    <Box>
      {loading ? (
        <Box>{children}</Box>
      ) : (
        <Validate
          isValid={userExist}
          redirect={redirect}
          message="Usuário não existe"
        >
          {children}
        </Validate>
      )}
    </Box>
  )
}

export default memo(HasUser)
