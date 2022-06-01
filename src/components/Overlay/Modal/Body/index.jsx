import { memo } from 'react'

import { ModalBody } from '@chakra-ui/react'

const ModalBodyDefault = ({ children, ...rest }) => {
  return (
    <ModalBody p={4} {...rest}>
      {children}
    </ModalBody>
  )
}

export default memo(ModalBodyDefault)
