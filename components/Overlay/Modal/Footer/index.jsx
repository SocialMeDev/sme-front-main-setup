import { memo } from 'react'

import { ModalFooter } from '@chakra-ui/react'

const ModalFooterDefault = ({ children, ...rest }) => {
  return (
    <ModalFooter borderTop="1px" borderColor="borderColor" gap={2} {...rest}>
      {children}
    </ModalFooter>
  )
}

export default memo(ModalFooterDefault)
