import { memo, useState } from 'react'

import { useDisclosure } from 'hooks'
import {
  MenuItem,
  Button,
  Icon,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Stack
} from 'components'
import { TrashDeleteBin } from 'components/Icons/Interface'

function DeleteButton({
  children,
  onDelete,
  title = 'Você tem certeza disso?',
  text,
  description = 'Você não poderá voltar atrás',
  cancelButtonText = 'Cancelar',
  submitButtonText = 'Sim, tenho certeza',
  ...rest
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [loadingButton, setLoadingButton] = useState(false)

  async function deleteAction() {
    setLoadingButton(true)
    const response = await onDelete()
    if (response) {
      if (response?.header?.success) {
        onClose()
        setLoadingButton(false)
      }
    }
    setLoadingButton(false)
  }

  return (
    <>
      <MenuItem
        color="danger"
        icon={<TrashDeleteBin />}
        onClick={onOpen}
        {...rest}
      >
        {children}
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack align="center">
              <Icon color="danger" as={TrashDeleteBin} boxSize="16" />
              <Heading>{title}</Heading>
              {text && <Text>{text}</Text>}
              {description && (
                <Text color="danger" fontWeight="bold">
                  {description}
                </Text>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} colorScheme="gray" onClick={onClose}>
              {cancelButtonText}
            </Button>
            <Button
              onClick={() => deleteAction()}
              isLoading={loadingButton}
              variant="solid"
              colorScheme="red"
            >
              {submitButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(DeleteButton)
