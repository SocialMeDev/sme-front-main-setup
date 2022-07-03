import { memo, useRef, useState, useCallback } from 'react'

import { Stack, Text, Loader } from 'components'
import { useDisclosure } from 'hooks'
import { Plus } from 'components/Icons/Interface'

import onUploadProgressInClient from 'components/Forms/Upload/SingleImage/utils/onUploadProgressInClient'
import InputFile from 'components/Forms/Upload/SingleImage/components/InputFile'
import CropperModal from 'components/Forms/Upload/SingleImage/components/CropperModal'

function NewImageBySelect({ size, rounded, closeGallery, onUpload }) {
  const [isUploading, setIsUploading] = useState(false)
  const [image, setImage] = useState({})

  const { isOpen, onOpen, onClose } = useDisclosure()

  const inputRef = useRef()

  const onAddImage = useCallback(async (event) => {
    const file = event.target.files[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    onUploadProgressInClient(url, setIsUploading)

    setImage({ file, url })

    onOpen()
  }, [])

  const handleImageUpload = useCallback(async (file) => {
    await onUpload(file)

    closeGallery()
  }, [])

  return (
    <InputFile ref={inputRef} onChange={onAddImage}>
      <Stack
        p={2}
        width={size}
        height={size}
        as="button"
        type="button"
        onClick={() => inputRef.current.click()}
        border="1px dashed"
        borderColor="borderColor"
        align="center"
        justify="center"
        _hover={{
          border: '1px solid',
          borderColor: 'primary',
          color: 'primary'
        }}
      >
        {isUploading ? (
          <Loader text="Carregando" height="100px" />
        ) : (
          <Stack align="center" spacing={0}>
            <Plus boxSize={8} />
            <Text>Nova imagem</Text>
          </Stack>
        )}
      </Stack>

      <CropperModal
        rounded={rounded}
        isOpen={isOpen}
        onClose={onClose}
        imageURL={image.url}
        file={image.file}
        onUpload={async (file) => await handleImageUpload(file)}
      />
    </InputFile>
  )
}

export default memo(NewImageBySelect)
