import { memo } from 'react'

import { DrawerContent } from '@chakra-ui/react'

const DrawerContentDefault = ({ children, ...rest }) => {
  return <DrawerContent {...rest}>{children}</DrawerContent>
}

export default memo(DrawerContentDefault)
