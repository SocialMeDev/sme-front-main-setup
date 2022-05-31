import { memo } from 'react'

import { LinkOverlay } from '@chakra-ui/react'

function LinkOverlayDefault({ children, ...rest }) {
  return <LinkOverlay {...rest}>{children}</LinkOverlay>
}

export default memo(LinkOverlayDefault)
