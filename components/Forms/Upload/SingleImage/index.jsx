import { memo, useEffect, useCallback, useState, useRef } from 'react'

import { Skeleton, Stack, Box, Image } from 'components'
import { useDisclosure } from 'hooks'
import InputFile from './components/InputFile'
import CropperModal from './components/CropperModal'
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
  size = '120px',
  label = 'Anexar foto',
  rounded = 'md'
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mainImage, setMainImage] = useState(defaultMainImage)
  const [file, setFile] = useState()
  const [images, setImages] = useState({})

  const [isUploading, setIsUploading] = useState(false)

  const inputRef = useRef()

  useEffect(() => {
    const images = formatDefaultImages(defaultImages)

    setImages(images)
  }, [defaultImages])

  const onChangeFile = useCallback((event) => {
    const file = event.target.files[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    setFile(file)
    setMainImage(url)

    onUploadProgressInClient(url, setIsUploading)

    onOpen()
  }, [])

  const handleImageUpload = useCallback(async (file) => {
    await onUpload(file)
  }, [])

  return (
    <Stack mb={4}>
      {defaultMainImage ? (
        <Box w={size} h={size} position="relative">
          {isLoading ? (
            <Skeleton isLoaded={!isLoading}>
              <Box w={size} h={size} />
            </Skeleton>
          ) : (
            <Image
              rounded={rounded}
              src={defaultMainImage}
              alt="Imagem dinâmica"
            />
          )}

          <GalleryButton
            size={size}
            rounded={rounded}
            images={images}
            setImages={setImages}
            onUpload={onUpload}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </Box>
      ) : (
        <InputFile ref={inputRef} onChange={onChangeFile}>
          <Box w={size} h={size} position="relative">
            <Skeleton isLoaded={!isLoading}>
              <UploadBox
                rounded={rounded}
                size={size}
                isUploading={isUploading}
                inputRef={inputRef}
                label={label}
              />
            </Skeleton>
          </Box>
        </InputFile>
      )}

      <CropperModal
        rounded={rounded}
        isOpen={isOpen}
        onClose={onClose}
        imageURL={mainImage}
        file={file}
        onUpload={async (file) => await handleImageUpload(file)}
      />
    </Stack>
  )
}

export default memo(UploadImage)
