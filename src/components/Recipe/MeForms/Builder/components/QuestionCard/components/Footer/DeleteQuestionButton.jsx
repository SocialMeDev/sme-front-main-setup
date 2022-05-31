import {
  Button,
  IconButton,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Heading,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import { TrashDeleteBin2 } from 'components/Icons/Interface'

export default function DeleteQuestionButton({ fieldId }) {
  const { deleteFormField } = useFormsManager()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        icon={<TrashDeleteBin2 />}
        aria-label="Menu"
        variant="ghost"
        colorScheme="red"
        onClick={() => onOpen()}
      />
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VStack
              w="full"
              justify="center"
              direction="column"
              align="center"
              spacing={1}
            >
              <Icon color="red.500" as={TrashDeleteBin2} fontSize="60pt" />
              <Heading>Você tem certeza disso?</Heading>
              <Text fontWeight="bold">A questão será perdida</Text>
              <Text color="red.500" fontWeight="bold">
                Você não poderá voltar atrás
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} colorScheme="gray" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={() => deleteFormField(fieldId, onClose)}
              colorScheme="red"
            >
              Sim, tenho certeza
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
