import { memo } from 'react'

import { DrawerFooter, useColorModeValue } from '@chakra-ui/react'

function CustomDrawerFooter({ children }) {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.700')

  return (
    <DrawerFooter
      p="4"
      borderTop="1px solid"
      borderColor={borderColor}
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </DrawerFooter>
  )
}

export default memo(CustomDrawerFooter)
