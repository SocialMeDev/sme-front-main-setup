import { memo, useCallback, useState, Fragment } from 'react'

import {
  Tooltip,
  ModalFooter,
  Button,
  Heading,
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader
} from 'components'
import { useDisclosure } from 'hooks'
import { Briefcase } from 'components/Icons/Interface'
import ImageList from './components/ImageList'

function GalleryButton({
  size,
  title,
  images,
  setImages,
  onUpdate,
  onUpload,
  onDelete
}) {
  const [isUpdating, setIsLoading] = useState(false)
  const [selectedImageToUpdate, setSelectedImageToUpdate] = useState({})

  const { isOpen, onClose, onOpen } = useDisclosure()

  const closeModal = useCallback(() => {
    onClose()
    setSelectedImageToUpdate({})
  }, [])

  const updateImage = useCallback(async () => {
    setIsLoading(true)

    await onUpdate(selectedImageToUpdate.avatarId)

    closeModal()

    setIsLoading(false)
  }, [selectedImageToUpdate])

  return (
    <Fragment>
      <Box position="absolute" bottom={-3} right={-3}>
        <IconButton
          icon={<Briefcase />}
          rounded="full"
          variant="solid"
          onClick={onOpen}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>
            <Heading color="primary">{title || 'Galeria de imagens'}</Heading>
          </ModalHeader>

          <ModalBody>
            <ImageList
              size={size}
              images={images}
              setImages={setImages}
              selectedImageToUpdate={selectedImageToUpdate}
              setSelectedImageToUpdate={setSelectedImageToUpdate}
              onUpload={onUpload}
              onDelete={onDelete}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={closeModal}>Fechar</Button>
            <Tooltip
              isDisabled={Object.entries(selectedImageToUpdate).length !== 0}
              placement="bottom"
              label="Seleciona uma imagem para trocar a foto"
            >
              <Button
                isLoading={isUpdating}
                disabled={Object.entries(selectedImageToUpdate).length === 0}
                variant="solid"
                onClick={updateImage}
              >
                Atualizar
              </Button>
            </Tooltip>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default memo(GalleryButton)
