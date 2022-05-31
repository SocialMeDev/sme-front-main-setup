import { memo } from 'react'

import { DrawerHeader } from '@chakra-ui/react'

const DrawerHeaderDefault = ({ children, ...rest }) => {
  return (
    <DrawerHeader
      p={4}
      fontWeight="500"
      borderBottom="1px"
      borderColor="borderColor"
      {...rest}
    >
      {children}
    </DrawerHeader>
  )
}

export default memo(DrawerHeaderDefault)
