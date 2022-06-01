import { memo, forwardRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Card = forwardRef((props, ref) => {
  return (
    <Box
      p={4}
      bg="white"
      boxShadow={useColorModeValue('md', 'dark-lg')}
      rounded="md"
      w="full"
      ref={ref}
      {...props}
    >
      {props.children}
    </Box>
  )
})

export default memo(Card)
