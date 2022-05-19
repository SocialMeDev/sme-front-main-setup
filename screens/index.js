import { Center, Heading, Text } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from 'public/images/lotties/duck.json'

export default function SetupPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <main>
      <Center minH="100vh" flexDirection={'column'}>
        <Lottie options={defaultOptions} height={300} width={300} />
        <Heading>Setup</Heading>
        <Text mt={2}>
          Ambiente de{' '}
          <Text as="span" color="blue.500">
            {process.env.NODE_ENV === 'development'
              ? 'Desenvolvimento'
              : 'Produção'}
          </Text>
        </Text>
      </Center>
    </main>
  )
}
