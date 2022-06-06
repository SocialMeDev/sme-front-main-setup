import { memo } from 'react'

import { DeleteButton, Box } from 'components'

function DeleteImageButton({ deleteImage }) {
  return (
    <Box position="absolute" bottom={-3} right={-3}>
      <DeleteButton
        description="Voçê perderá esta imagem para sempre"
        onDelete={deleteImage}
        variant="solid"
        color="light"
        colorScheme="red"
        rounded="full"
      />
    </Box>
  )
}

export default memo(DeleteImageButton)
