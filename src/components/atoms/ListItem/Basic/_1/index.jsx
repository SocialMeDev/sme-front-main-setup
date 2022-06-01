import { memo } from 'react'
import { HStack } from '@chakra-ui/react'

function ListItem({ children, ...rest }) {
  return (
    <HStack
      as="li"
      p={2}
      borderWidth="1px"
      borderColor="gray.200"
      justify="space-between"
      rounded="md"
      w="100%"
      {...rest}
    >
      {children}
    </HStack>
  )
}

export default memo(ListItem)
