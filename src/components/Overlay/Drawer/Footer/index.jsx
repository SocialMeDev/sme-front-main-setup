import { memo } from 'react'

import { DrawerFooter } from '@chakra-ui/react'

const DrawerFooterDefault = ({ children, ...rest }) => {
  return (
    <DrawerFooter
      p={4}
      borderTop="1px"
      borderColor="borderColor"
      gap={2}
      {...rest}
    >
      {children}
    </DrawerFooter>
  )
}

export default memo(DrawerFooterDefault)
