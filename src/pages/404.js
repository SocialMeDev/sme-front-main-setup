import { useMemo } from 'react'
import {
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

import animationDataLight from '@public/images/lotties/404bounceLight.json'
import animationDataDark from '@public/images/lotties/404bounceDark.json'

export default function Custom404() {
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

  const lottieHeight = useBreakpointValue({ base: 150, md: 400 })
  const lottieWidth = useBreakpointValue({ base: 300, md: 600 })

  return (
    <Center p={[2, 10]} minH={{ base: ' 90vh', md: '100vh' }}>
      <Flex flexDir={{ base: 'column', md: 'row' }}>
        <Center w={{ base: 'auto', md: 600 }}>
          <Lottie
            options={defaultOptions}
            height={lottieHeight}
            width={lottieWidth}
          />
        </Center>
        <Stack
          p={6}
          flexDir={'column'}
          align={{ base: 'center', md: 'flex-start' }}
          justify={'center'}
          spacing={[{ base: 2, md: 6 }]}
        >
          <Heading size="2xl" textAlign={{ base: 'center', md: 'justify' }}>
            Você parece perdido.
          </Heading>
          <Text fontSize={'lg'} textAlign={{ base: 'center', md: 'justify' }}>
            A página que você está procurando não existe. Como você chegou aqui
            é um mistério, mas você pode clicar no botão abaixo para voltar à
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
