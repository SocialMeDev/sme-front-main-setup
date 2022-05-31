import { memo } from 'react'
import {
  Heading,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader
} from '@chakra-ui/react'

const CustomModal = ({ isOpen, onClose, modalTitle, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton />
        <ModalHeader borderBottomWidth="1px" borderColor="borderColor">
          <Heading>{modalTitle}</Heading>
        </ModalHeader>

        {children}
      </ModalContent>
    </Modal>
  )
}

export default memo(CustomModal)
