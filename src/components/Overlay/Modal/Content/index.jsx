import { memo } from 'react'

import { ModalContent } from '@chakra-ui/react'

const ModalContentDefault = ({ children, ...rest }) => {
  return <ModalContent {...rest}>{children}</ModalContent>
}

export default memo(ModalContentDefault)
