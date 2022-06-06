import { memo, useState, useEffect, useRef } from 'react'

import { Box, Skeleton, Stack, Image } from 'components'
import DeleteButton from './components/DeleteButton'

function ImageItem({
  size,
  image,
  selectedImageToUpdate,
  setSelectedImageToUpdate,
  deleteImage
}) {
  const [loadingImage, setLoadingImage] = useState(true)
  const imageRef = useRef()

  const isSelectedImage = image.avatarId === selectedImageToUpdate.avatarId

  useEffect(() => {
    imageRef.current.onload = () => {
      setLoadingImage(false)
    }

    imageRef.current.src = image.url
  }, [imageRef.current])

  return (
    <Box w={size} h={size} position="relative">
      <Skeleton isLoaded={!loadingImage}>
        <Stack
          onClick={() => setSelectedImageToUpdate(image)}
          p={2}
          h="100%"
          w="100%"
          as="button"
          type="button"
          borderWidth="1px"
          borderColor={isSelectedImage ? 'primary' : 'borderColor'}
          outlineColor={isSelectedImage && 'primary'}
          align="center"
          justify="center"
          _hover={{ borderColor: 'primary' }}
        >
          <Image ref={imageRef} alt="Imagem dinâmica" />
        </Stack>

        <DeleteButton onClick={deleteImage} />
      </Skeleton>
    </Box>
  )
}

export default memo(ImageItem)
