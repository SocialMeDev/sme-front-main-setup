import { memo, useRef } from 'react'

import { Box, Stack, Image } from 'components'
import DeleteImage from './components/Delete'
import InputFile from '../InputFile'

function ImageItem({ size, isDeletable, image, updateImage, removeImage }) {
  const inputRef = useRef()

  return (
    <InputFile ref={inputRef} onChange={updateImage}>
      <Box w={size} h={size} position="relative">
        <Stack
          as="button"
          w="100%"
          h="100%"
          onClick={() => inputRef.current.click()}
          border="2px solid"
          borderColor="transparent"
          align="center"
          justify="center"
          _hover={{ borderColor: 'primary' }}
        >
          <Image boxSize={size} src={image} />
        </Stack>

        {isDeletable && <DeleteImage onDelete={removeImage} />}
      </Box>
    </InputFile>
  )
}

export default memo(ImageItem)
