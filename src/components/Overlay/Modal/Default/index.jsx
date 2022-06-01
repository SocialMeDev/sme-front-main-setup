import { forwardRef, memo } from 'react'

import { Modal, ModalOverlay } from '@chakra-ui/react'

const ModalDefault = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Modal {...rest} ref={ref}>
      <ModalOverlay />

      {children}
    </Modal>
  )
})

export default memo(ModalDefault)
