import { memo } from 'react'

import { ModalHeader } from '@chakra-ui/react'

const ModalHeaderDefault = ({ children, ...rest }) => {
  return (
    <ModalHeader
      fontWeight="500"
      borderBottom="1px"
      borderColor="borderColor"
      {...rest}
    >
      {children}
    </ModalHeader>
  )
}

export default memo(ModalHeaderDefault)
