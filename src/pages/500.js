import { useMemo } from 'react'

import {
  Box,
  NextLink,
  Lottie,
  Center,
  Heading,
  Text,
  Button,
  Flex,
  Stack
} from 'components'
import { useBreakpointValue, useColorModeValue } from 'hooks'
import animationDataLight from '@public/images/lotties/errorLight.json'
import animationDataDark from '@public/images/lotties/errorDark.json'

export default function Custom500() {
  const defaultOptions = useMemo(() => {
    return {
      loop: false,
      autoplay: true,
      animationData: useColorModeValue(animationDataLight, animationDataDark),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }, [])

  const lottieHeight = useBreakpointValue({ base: 150, md: 500 })
  const lottieWidth = useBreakpointValue({ base: 150, md: 500 })

  return (
    <Center p={2} minH={{ base: ' 90vh', md: '100vh' }}>
      <Flex flexDir={{ base: 'column', md: 'row' }}>
        <Box>
          <Lottie
            options={defaultOptions}
            height={lottieHeight}
            width={lottieWidth}
          />
        </Box>
        <Stack
          p={6}
          flexDir={'column'}
          align={{ base: 'center', md: 'flex-start' }}
          justify={'center'}
          spacing={[{ base: 2, md: 6 }]}
        >
          <Heading size="2xl" textAlign={{ base: 'center', md: 'justify' }}>
            Erro interno no servidor
          </Heading>
          <Text fontSize={'lg'} textAlign={{ base: 'center', md: 'justify' }}>
            Pedimos desculpas por isso. Tivemos problemas técnicos durante nossa
            última operação, mas você pode clicar no botão abaixo para voltar à
            página inicial.
          </Text>
          <NextLink href={'/'} passHref>
            <Button size={'lg'} colorScheme={'purple'} w={'100%'}>
              Voltar
            </Button>
          </NextLink>
        </Stack>
      </Flex>
    </Center>
  )
}
