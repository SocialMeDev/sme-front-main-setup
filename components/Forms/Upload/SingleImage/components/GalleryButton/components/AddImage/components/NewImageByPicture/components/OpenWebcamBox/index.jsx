import { memo } from 'react'

import { Stack, Text } from 'components'
import { CameraPhoto } from 'components/Icons/PhotoEdit'

function OpenWebcamBox({ size, openWebcan }) {
  return (
    <Stack
      as="button"
      type="button"
      p={2}
      width={size}
      height={size}
      onClick={openWebcan}
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
      <Stack align="center" spacing={0}>
        <CameraPhoto boxSize={8} />
        <Text>Tirar foto</Text>
      </Stack>
    </Stack>
  )
}

export default memo(OpenWebcamBox)
