import { memo, useState, useCallback } from 'react'

import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter
} from 'components'

import { CloudUpload2 } from 'components/Icons/Interface'

import CropBox from './components/CropBox'

function ImageCropInModal({
  isOpen,
  onClose,
  size,
  title,
  buttonText,
  imageURL,
  onUpload
}) {
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = useCallback(async () => {
    setIsLoading(true)

    await onUpload()

    setIsLoading(false)

    onClose()
  }, [onUpload])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalCloseButton />

        <ModalHeader>
          <Heading color="primary">{title || 'Recortando imagem'}</Heading>
        </ModalHeader>

        <ModalBody p={0}>
          <CropBox
            size={size}
            imageURL={imageURL}
            onUpload={onUpload}
            buttonText={buttonText}
          />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>

          <Button
            isLoading={isLoading}
            leftIcon={<CloudUpload2 />}
            variant="solid"
            onClick={handleImageUpload}
          >
            {buttonText || 'Realizar upload'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(ImageCropInModal)
