import {
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from 'components'
import { useDisclosure } from 'hooks'

import { Question } from 'components/Icons/Interface'

export default function InfoModal({ title, info, children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        icon={<Question />}
        aria-label="Abrir um menu de informações detalhadas"
        variant="ghost"
        onClick={onOpen}
        _hover={{ bg: 'primary', color: 'light' }}
        {...rest}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {title && (
            <ModalHeader color="primary">
              <Heading>{{ title }}</Heading>
            </ModalHeader>
          )}
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
