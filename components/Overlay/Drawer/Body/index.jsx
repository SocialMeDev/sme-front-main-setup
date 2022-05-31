import { memo } from 'react'

import { DrawerBody } from '@chakra-ui/react'

const DrawerBodyDefault = ({ children, ...rest }) => {
  return (
    <DrawerBody p={4} overflowY="auto" {...rest}>
      {children}
    </DrawerBody>
  )
}

export default memo(DrawerBodyDefault)
