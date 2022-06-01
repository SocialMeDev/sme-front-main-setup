import { useState, useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'

import { useAuth } from 'contexts/Auth/Provider'
import Validate from 'components/atoms/Validate'

function IsAutheticated({
  loading,
  setLoading,
  children,
  redirect,
  shouldBeDisconnect
}) {
  const { query } = useRouter()

  const [isPermited, setIsPermited] = useState(false)
  const [message, setMessage] = useState('Mensagem')

  const { user, userPosition } = useAuth()

  useEffect(() => {
    setLoading(true)

    async function loadAsyncFunction() {
      const isConnected = userPosition !== false || shouldBeDisconnect === true
      const userExist = user.id

      if (isConnected && userExist) {
        setIsPermited(true)
      } else {
        setIsPermited(false)

        const authMessage = shouldBeDisconnect
          ? 'Usuário já conectado'
          : 'Usuário não conectado'

        setMessage(userExist ? authMessage : 'Usuário não existe')
      }

      setLoading(false)
    }

    loadAsyncFunction()
  }, [query.userPosition])

  return (
    <Box>
      {!loading && (
        <Validate isValid={isPermited} redirect={redirect} message={message}>
          {children}
        </Validate>
      )}
    </Box>
  )
}

export default memo(IsAutheticated)
