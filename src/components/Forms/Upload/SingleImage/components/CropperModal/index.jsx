import { memo, useEffect, useRef, useState } from 'react'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'

import {
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader
} from 'components'

// import { CloudUpload2 } from 'components/Icons/Interface'

import ImageWorkspace from './components/ImageWorkspace'
import CropperConfiguratons from './components/CropperConfiguratons'

function CropperModal({ rounded, isOpen, onClose, imageURL, file, onUpload }) {
  const imageRef = useRef()
  const imagePreviewRef = useRef()

  console.log(`isOpen`, isOpen)
  console.log(`imageURL`, imageURL)
  console.log(`file`, file)

  const [cropper, setCropper] = useState({})

  const handleImageUpload = async () => {
    await onUpload(imagePreviewRef.current.file)

    onClose()
  }

  useEffect(() => {
    console.log(`imageRef.current`, imageRef.current)
    console.log(`imagePreviewRef.current`, imagePreviewRef.current)

    if (imageRef.current) {
      const cropperOptions = {
        dragMode: 'move',
        viewMode: 2,
        modal: false,
        autoCropArea: 1,
        minContainerWidth: 100,
        minContainerHeight: 100,
        background: false,
        aspectRatio: 1,
        crop: () => {
          const { naturalHeight, naturalWidth } = cropper.getImageData()

          let width = 160
          let height = 160

          if (naturalWidth < width) width = naturalWidth
          if (naturalHeight < height) height = naturalHeight

          const canvas = cropper.getCroppedCanvas({ width, height })

          const imageInCanvas = canvas.toDataURL()

          imagePreviewRef.current.src = imageInCanvas

          canvas.toBlob(function (blob) {
            if (imagePreviewRef.current) {
              imagePreviewRef.current.file = new File([blob], 'image.png')
            }
          })
        }
      }

      const cropper = new Cropper(imageRef.current, cropperOptions)

      setCropper(cropper)
    }
  }, [isOpen, imageRef.current, imagePreviewRef.current])

  const onDownload = () => {
    const a = document.createElement('a')
    a.download = file.name
    a.href = imagePreviewRef.current.src
    a.click()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        maxWidth={{ sm: '95%', md: '800px' }}
        minHeight={{ sm: 'auto', md: '550px' }}
        mt={10}
      >
        <ModalCloseButton />

        <ModalHeader>
          <Heading color="primary">Recortando imagem</Heading>
        </ModalHeader>

        <ModalBody p={0}>
          <Grid
            height="100%"
            templateColumns={{ base: 'none', md: '50% 50%', lg: '70% 30%' }}
          >
            <ImageWorkspace ref={imageRef} src={imageURL} />

            <CropperConfiguratons
              src={imageURL}
              ref={imagePreviewRef}
              rounded={rounded}
              cropper={cropper}
              onUpload={handleImageUpload}
              onDownload={onDownload}
            />
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default memo(CropperModal)
