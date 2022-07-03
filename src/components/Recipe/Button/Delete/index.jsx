import { memo, useCallback, useState } from 'react'

import { useDisclosure } from 'hooks'
import {
  IconButton,
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
  colorScheme = 'gray',
  color = 'dark',
  title = 'Você tem certeza disso?',
  text,
  description = 'Você não poderá voltar atrás',
  cancelButtonText = 'Cancelar',
  submitButtonText = 'Sim, tenho certeza',
  type = children ? 'button' : 'icon',
  variant = 'ghost',
  modalLogic = true,
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

  const shouldOpenModal = useCallback(() => {
    if (modalLogic) onOpen()
  }, [])

  const IconButtonType = useCallback(() => {
    return (
      <IconButton
        colorScheme={colorScheme}
        variant={variant}
        icon={<TrashDeleteBin color={color} />}
        onClick={shouldOpenModal}
        {...rest}
      />
    )
  }, [])

  const ButtonType = useCallback(() => {
    return (
      <Button
        variant={variant}
        colorScheme={colorScheme}
        leftIcon={<TrashDeleteBin color={color} />}
        onClick={shouldOpenModal}
        {...rest}
      >
        {children}
      </Button>
    )
  }, [])

  const types = {
    icon: <IconButtonType />,
    button: <ButtonType />
  }

  return (
    <>
      {types[type]}

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack direction="column" align="center">
              <Icon color="red.500" as={TrashDeleteBin} boxSize="16" />
              <Heading>{title}</Heading>
              {text && <Text textAlign="center">{text}</Text>}

              <Text color="red.500" fontWeight="bold">
                {description}
              </Text>
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
