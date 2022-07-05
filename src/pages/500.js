import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Lottie from 'react-lottie'

import animationDataLight from 'public/images/lotties/errorLight.json'
import animationDataDark from 'public/images/lotties/errorDark.json'

export default function Custom500() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: useColorModeValue(animationDataLight, animationDataDark),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const lottieHeight = useBreakpointValue({ base: 150, md: 500 })
  const lottieWidth = useBreakpointValue({ base: 150, md: 500 })
  return (
    <Center as="main" p={2} minH={['90vh', null, '100vh']}>
      <Flex flexDir={['column', null, 'row']}>
        <Box>
          <Lottie
            options={defaultOptions}
            height={lottieHeight}
            width={lottieWidth}
          />
        </Box>
        <VStack
          p={6}
          flexDir={'column'}
          align={['center', null, 'flex-start']}
          justify={'center'}
          spacing={[2, null, 6]}
        >
          <Heading size="2xl" textAlign={['center', null, 'justify']}>
            Erro interno no servidor
          </Heading>
          <Text fontSize={'lg'} textAlign={['center', null, 'justify']}>
            Pedimos desculpas por isso. Tivemos problemas técnicos durante nossa
            última operação, mas você pode clicar no botão abaixo para voltar à
            página inicial.
          </Text>
          <NextLink href={'/'} passHref>
            <Button size={'lg'} colorScheme={'purple'} w={'100%'}>
              Voltar
            </Button>
          </NextLink>
        </VStack>
      </Flex>
    </Center>
  )
}
