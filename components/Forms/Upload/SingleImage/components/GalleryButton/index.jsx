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
import { CameraPhoto } from 'components/Icons/PhotoEdit'
import AddImage from './components/AddImage'
import ImageList from './components/ImageList'

function GalleryButton({
  rounded,
  size,
  title,
  images,
  setImages,
  onUpload,
  onUpdate,
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
          aria-label="Abrir galeria de imagens"
          icon={<CameraPhoto />}
          rounded="full"
          variant="solid"
          onClick={onOpen}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent
          minWidth={{ base: '95%', sm: '450px', md: '550px', lg: '650px' }}
          minHeight={{ base: '95%', md: '300px', lg: '400px' }}
          mt={10}
        >
          <ModalCloseButton />

          <ModalHeader>
            <Heading color="primary">{title || 'Galeria de imagens'}</Heading>
          </ModalHeader>

          <ModalBody>
            <AddImage
              size={size}
              rounded={rounded}
              closeGallery={onClose}
              onUpload={onUpload}
            />
            <ImageList
              images={images}
              setImages={setImages}
              selectedImageToUpdate={selectedImageToUpdate}
              setSelectedImageToUpdate={setSelectedImageToUpdate}
              onDelete={onDelete}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={closeModal}>Fechar</Button>
            <Tooltip
              isDisabled={Object.entries(selectedImageToUpdate).length !== 0}
              placement="bottom"
              label="Seleciona uma imagem"
            >
              <Button
                isLoading={isUpdating}
                disabled={Object.entries(selectedImageToUpdate).length === 0}
                variant="solid"
                onClick={updateImage}
              >
                Atualizar foto
              </Button>
            </Tooltip>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default memo(GalleryButton)
