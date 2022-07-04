import { useColorModeValue } from '@chakra-ui/react'

export default function useCustomColorModeValue(...colors) {
  const [light, dark] = colors

  return useColorModeValue(light, dark)
}
