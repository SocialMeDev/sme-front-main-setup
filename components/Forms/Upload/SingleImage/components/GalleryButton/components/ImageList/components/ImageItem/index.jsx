import { memo } from 'react'

import { Box, Stack, Image } from 'components'
import DeleteButton from './components/DeleteButton'

function ImageItem({
  image,
  selectedImageToUpdate,
  setSelectedImageToUpdate,
  deleteImage
}) {
  const isSelectedImage = image.avatarId === selectedImageToUpdate.avatarId

  return (
    <Box mb={4} width="100px" height="100px" position="relative">
      <Stack
        onClick={() => setSelectedImageToUpdate(image)}
        as="button"
        type="button"
        align="center"
        justify="center"
        outline="3px solid transparent"
        outlineColor={isSelectedImage && 'primary'}
        _hover={{ outlineColor: 'primary' }}
        _focus={{ outlineColor: 'primary' }}
      >
        <Image rounded="md" src={image.url} alt="Imagem dinâmica" />
      </Stack>

      <DeleteButton onClick={deleteImage} />
    </Box>
  )
}

export default memo(ImageItem)
