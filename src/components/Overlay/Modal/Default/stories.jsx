import useDisclosure from 'hooks/useDisclosure'

import {
  Heading,
  Input,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from 'components'

import Modal from '.'

export default {
  component: Modal,
  title: 'Overlay/Modal/Default',
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button variant="solid" onClick={onOpen}>
        Abrir Modal
      </Button>

      <Modal isOpen={isOpen} {...args}>
        <ModalContent>
          <ModalCloseButton onClick={onClose} />
          <ModalHeader>
            <Heading>Cabeçalho do modal</Heading>
          </ModalHeader>

          <ModalBody>
            <Input />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
            <Button variant="solid">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
