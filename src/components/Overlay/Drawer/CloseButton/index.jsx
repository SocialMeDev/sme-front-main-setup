import { memo } from 'react'

import { DrawerCloseButton } from '@chakra-ui/react'

const DrawerCloseButtonDefault = ({ ...rest }) => {
  return <DrawerCloseButton {...rest} />
}

export default memo(DrawerCloseButtonDefault)
