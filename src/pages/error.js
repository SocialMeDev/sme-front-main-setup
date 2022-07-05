import { useEffect, useState } from 'react'
import { Code, useColorModeValue } from '@chakra-ui/react'
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
import { ToolsSettings } from 'components/Icons/Interface'
import { getCookieName } from 'utils/helpers/sirVariables'
import { deleteStorage } from 'utils/helpers/sirStorage'
import createError from 'services/socialMeApis/modules/admin/calls/error/create'
import animationData from 'public/images/lotties/memeError.json'

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
        //stack: JSON.stringify(err.stack),
        res: JSON.stringify(res),
        statusCode: JSON.stringify(statusCode)
      }
      const response = await createError(data.internal_id, data)
      if (response) {
        setRequestId(data.internal_id)
      }
      setLoadingContent(false)
    }
    createLog()
  }, [])

  async function onRepair() {
    setLoadingButton(true)
    await deleteStorage(getCookieName('browser'))
    await deleteStorage(getCookieName('userPosition'))
    await deleteStorage(getCookieName('user'))
    await deleteStorage(getCookieName('acceptedCookies'))
    await deleteStorage(getCookieName('userTheme'))
    await deleteStorage(getCookieName('userSize'))
    window.location = window.location.href + '?eraseCache=true'
    setLoadingButton(false)
  }

  if (loadingContent) {
    return <Loader h="100vh" />
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
            onClick={() => onRepair()}
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
