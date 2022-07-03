import { memo, useState, useCallback } from 'react'

import { useDisclosure } from 'hooks'
import CropperModal from 'components/Forms/Upload/SingleImage/components/CropperModal'
import OpenWebcamBox from './components/OpenWebcamBox'
import WebcamPreview from './components/WebcamPreview'
function NewImageBySelect({ size, rounded, closeGallery, onUpload }) {
  const [openWebcanPreview, setOpenWebcanPreview] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [image, setImage] = useState()

  const handleImageUpload = useCallback(async (file) => {
    await onUpload(file)

    closeGallery()
  }, [])

  return (
    <>
      <OpenWebcamBox
        size={size}
        openWebcan={() => setOpenWebcanPreview(true)}
      />

      <WebcamPreview
        isOpen={openWebcanPreview}
        onClose={() => setOpenWebcanPreview(false)}
        setImage={(image) => {
          setImage(image)
          onOpen()
        }}
      />

      {image && (
        <CropperModal
          rounded={rounded}
          isOpen={isOpen}
          onClose={onClose}
          imageURL={image.url}
          file={image.file}
          onUpload={async (file) => await handleImageUpload(file)}
        />
      )}
    </>
  )
}

export default memo(NewImageBySelect)
