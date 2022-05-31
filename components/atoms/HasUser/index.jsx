import { useState, useEffect, memo } from 'react'
import { Box } from '@chakra-ui/react'
import { useAuth } from 'contexts/Auth/Provider'

import Validate from 'components/atoms/Validate'

function ShouldHaveUser({ loading, setLoading, children, redirect }) {
  const [isPermited, setIsPermited] = useState(false)

  const { user, userPosition } = useAuth()

  useEffect(() => {
    console.log(`Alo`)

    async function loadAsync() {
      const userExist = Object.entries(user).length > 0

      console.log(`userExist`, userExist)

      if (userExist) {
        setIsPermited(true)
      } else {
        setIsPermited(false)
      }

      setLoading(false)
    }

    loadAsync()
  }, [userPosition])

  return (
    <Box>
      {!loading && (
        <Validate
          isValid={isPermited}
          redirect={redirect}
          message="Usuário não existe"
        >
          {children}
        </Validate>
      )}
    </Box>
  )
}

export default memo(ShouldHaveUser)
