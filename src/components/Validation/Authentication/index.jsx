import { useState, useEffect, memo } from 'react'
import { Box } from '@chakra-ui/react'

import { useAuth } from 'contexts/Auth/Provider'
import { Validate } from 'components'

function Authentication({ children, redirect, shouldBeDisconnect }) {
  const [loading, setLoading] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [message, setMessage] = useState('Mensagem')

  const { user, userPosition } = useAuth()

  useEffect(() => {
    setLoading(true)

    async function loadAsyncFunction() {
      const isConnected = userPosition !== false || shouldBeDisconnect === true
      const userExist = user.id

      if (isConnected && userExist) {
        setIsConnected(true)
      } else {
        setIsConnected(false)

        const authMessage = shouldBeDisconnect
          ? 'Usuário já conectado'
          : 'Usuário não conectado'

        setMessage(authMessage || 'Usuário não existe')
      }

      setLoading(false)
    }

    loadAsyncFunction()
  }, [user])

  return (
    <Box>
      {loading ? (
        <Box>{children}</Box>
      ) : (
        <Validate isValid={isConnected} redirect={redirect} message={message}>
          {children}
        </Validate>
      )}
    </Box>
  )
}

export default memo(Authentication)
