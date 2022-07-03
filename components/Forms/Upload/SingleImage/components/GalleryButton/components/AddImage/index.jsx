import { memo } from 'react'

import { Stack, Heading, Flex } from 'components'
import NewImageBySelect from './components/NewImageBySelect'
import NewImageByPicture from './components/NewImageByPicture'

function AddImage({ size, rounded, closeGallery, onUpload }) {
  return (
    <Stack px={2} mb={4}>
      <Heading>Nova imagem</Heading>

      <Flex gap={4}>
        <NewImageBySelect
          size={size}
          rounded={rounded}
          closeGallery={closeGallery}
          onUpload={onUpload}
        />

        <NewImageByPicture
          size={size}
          rounded={rounded}
          closeGallery={closeGallery}
          onUpload={onUpload}
        />
      </Flex>
    </Stack>
  )
}

export default memo(AddImage)
