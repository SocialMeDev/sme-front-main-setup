import { memo } from 'react'

import { ModalOverlay } from '@chakra-ui/react'

const ModalOverlayDefault = ({ children, ...rest }) => {
  return <ModalOverlay {...rest}>{children}</ModalOverlay>
}

export default memo(ModalOverlayDefault)
