import { useDisclosure } from '@chakra-ui/react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from 'components'
import { Question } from 'components/Icons/Interface'

export default function InfoModal({
  color = 'dark',
  title,
  info,
  children,
  ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Question cursor="pointer" color={color} onClick={onOpen} {...rest} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {title && <ModalHeader color="primary">{title}</ModalHeader>}
          <ModalCloseButton />
          <ModalBody>
            {info && <Text textAlign="justify">{info}</Text>}
            {children && children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
