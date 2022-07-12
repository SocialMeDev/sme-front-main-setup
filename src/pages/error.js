import { useEffect, useState } from 'react'

import { Code } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Text,
  Center,
  Heading,
  Button,
  Loader,
  Lottie
} from 'components'
import { useColorModeValue } from 'hooks'
import { ToolsSettings } from 'components/Icons/Interface'
import { deleteStorage } from 'helpers/sirStorage'
import authenticatorAPI from 'configs/http/authenticator'
import animationData from '@public/images/lotties/memeError.json'

function Error({ statusCode, res, err }) {
  const [loadingContent, setLoadingContent] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)
  const [requestId, setRequestId] = useState()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    async function createLog() {
      const data = {
        internal_id: Date.now(),
        message: JSON.stringify(err.message),
        res: JSON.stringify(res),
        statusCode: JSON.stringify(statusCode)
      }

      const response = await authenticatorAPI({
        url: `/admin/error/${data.internal_id}`,
        method: 'POST',
        data
      })

      if (response) {
        setRequestId(data.internal_id)
      }
      setLoadingContent(false)
    }
    createLog()
  }, [])

  async function resetCookiesAndCache() {
    setLoadingButton(true)

    await deleteStorage(process.env.NEXT_PUBLIC_USER_POSITION_COOKIE)
    await deleteStorage(process.env.NEXT_PUBLIC_USERS_TOKENS_COOKIE)
    await deleteStorage(process.env.NEXT_PUBLIC_ACCEPT_COOKIES)
    window.location = window.location.href + '?eraseCache=true'

    setLoadingButton(false)
  }

  if (loadingContent) {
    return <Loader h="100vh" text="Carregando..." />
  }

  return (
    <Center
      minH="100vh"
      p={20}
      flexDir={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <Flex>
        <Lottie options={defaultOptions} size={300} />
        <Flex w="400px" flexDir="column" gap={2}>
          <Heading>Ops...</Heading>
          <Text align="justify">
            Alguma coisa aconteceu e pedimos desculpas por isso
          </Text>
          <Text align="justify">
            Pode ser que seja um problema ocasionado por um conflito de cookies
            ou de cache
          </Text>
          <Text align="justify">
            Pressione o botão abaixo que iremos tentar fazer uma limpeza no
            sistema
          </Text>
          <Button
            variant="solid"
            leftIcon={<ToolsSettings />}
            isLoading={loadingButton}
            onClick={resetCookiesAndCache}
          >
            Tentar reparar
          </Button>
          <Text align="justify">
            Caso o problema persista, entre em contato com o suporte
          </Text>
          <Box bg={useColorModeValue('gray.50', 'gray.800')} p={4} rounded="md">
            <Flex gap={2} align="center">
              <Text>Id da requisição: </Text>
              <Code colorScheme="red">{requestId}</Code>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Center>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, res, err }
}

export default Error
