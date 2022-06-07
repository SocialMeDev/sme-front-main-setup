import {
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
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
        <ModalContent>
          <ModalCloseButton />

          {title && (
            <ModalHeader>
              <Heading color="primary">{title}</Heading>
            </ModalHeader>
          )}

          <ModalBody>
            {info && <Text textAlign="justify">{info}</Text>}
            {children && children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
