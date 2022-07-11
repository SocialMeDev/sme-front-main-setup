import { ChakraProvider } from '@chakra-ui/react'

export default function Theme({ children, ...rest }) {
  return <ChakraProvider {...rest}>{children}</ChakraProvider>
}
