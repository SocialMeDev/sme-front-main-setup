import { memo } from 'react'

import { DrawerOverlay } from '@chakra-ui/react'

const DrawerOverlayDefault = ({ ...rest }) => {
  return <DrawerOverlay {...rest} />
}

export default memo(DrawerOverlayDefault)
