import { memo } from 'react'
import { HStack, Box, Text, useColorModeValue } from '@chakra-ui/react'

function CustomBadge({
  children,
  text = '',
  type = '',
  circleSize = '0.5rem',
  circleColor = '',
  ...rest
}) {
  const possibleBadgeTypes = {
    success: useColorModeValue('green.400', 'green.200'),
    error: useColorModeValue('red.400', 'red.200'),
    info: useColorModeValue('blue.400', 'blue.200'),
    warning: useColorModeValue('yellow.400', 'yellow.200')
  }

  return (
    <HStack justify={['center', 'flex-start']} {...rest}>
      <Box
        w={circleSize}
        h={circleSize}
        rounded="full"
        bg={circleColor || possibleBadgeTypes[type]}
      />
      {children || <Text>{text}</Text>}
    </HStack>
  )
}

export default memo(CustomBadge)
