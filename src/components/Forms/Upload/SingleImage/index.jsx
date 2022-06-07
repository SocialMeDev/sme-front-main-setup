import { memo, useEffect, useCallback, useState, useRef } from 'react'

import { Skeleton, ScaleFade, Stack, Box } from 'components'
import { useDisclosure } from 'hooks'
import InputFile from './components/InputFile'
import ImageCropInModal from './components/ImageCropInModal'
import GalleryButton from './components/GalleryButton'
import UploadBox from './components/UploadBox'

import onUploadProgressInClient from './utils/onUploadProgressInClient'
import formatDefaultImages from './utils/formatDefaultImages'

function UploadImage({
  onUpdate,
  onDelete,
  onUpload,
  isLoading,
  defaultMainImage,
  defaultImages = [],
  size = '125px',
  label = 'Anexar foto',
  rounded = 'md'
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [images, setImages] = useState({})

  const [isUploading, setIsUploading] = useState(false)

  const inputRef = useRef()

  console.log(`defaultMainImage`, defaultMainImage)

  useEffect(() => {
    const images = formatDefaultImages(defaultImages)

    setImages(images)
  }, [defaultImages])

  const onChangeFile = useCallback((event) => {
    const file = event.target.files[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    onUploadProgressInClient(url, setIsUploading)

    onOpen()
  }, [])

  const handleImageUpload = useCallback(async (image) => {
    const { file } = image

    await onUpload(file)
  }, [])

  return (
    <Stack mb={4}>
      <InputFile ref={inputRef} onChange={onChangeFile}>
        <Box w={size} h={size} position="relative">
          <Skeleton isLoaded={!isLoading}>
            <UploadBox
              size={size}
              isUploading={isUploading}
              inputRef={inputRef}
              imageURL={defaultMainImage}
              label={label}
              rounded={rounded}
            />
          </Skeleton>

          {defaultMainImage && (
            <ScaleFade show={true}>
              <GalleryButton
                size={size}
                rounded={rounded}
                images={images}
                setImages={setImages}
                onUpload={onUpload}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            </ScaleFade>
          )}
        </Box>
      </InputFile>

      <ImageCropInModal
        isOpen={isOpen}
        onClose={onClose}
        imageURL={defaultMainImage}
        size={size}
        onUpload={async () => await handleImageUpload(defaultMainImage)}
      />
    </Stack>
  )
}

export default memo(UploadImage)
