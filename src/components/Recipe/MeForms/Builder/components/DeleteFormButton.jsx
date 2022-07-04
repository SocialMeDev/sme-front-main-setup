import {
  Button,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Heading,
  Text,
  Stack
} from 'components'
import { useDisclosure } from 'hooks'
import { useFormsManager } from '../contexts/FormsManager/Provider'
import { TrashBinSquare } from 'components/Icons/Interface'

export default function DeleteFormButton() {
  const { deleteAllForm } = useFormsManager()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        size="md"
        variant="ghost"
        colorScheme="red"
        onClick={() => onOpen()}
      >
        Apagar formulário
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack
              w="full"
              justify="center"
              direction="column"
              align="center"
              spacing={1}
            >
              <Icon color="red.500" as={TrashBinSquare} fontSize="60pt" />
              <Heading>Você tem certeza disso?</Heading>
              <Text fontWeight="bold">Todas as questões serão perdidas</Text>
              <Text color="red.500" fontWeight="bold">
                Você não poderá voltar atrás
              </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} colorScheme="gray" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={() => deleteAllForm(onClose)} colorScheme="red">
              Sim, tenho certeza
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
