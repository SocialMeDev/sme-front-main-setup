import { memo } from 'react'

import { Stack, Text, Loader } from 'components'

import { CloudUpload2 } from 'components/Icons/Interface'

function UploadBox({ size, isUploading, inputRef, label, rounded }) {
  return (
    <Stack
      as="button"
      type="button"
      w={size}
      h={size}
      onClick={() => inputRef.current.click()}
      border="1px dashed"
      borderColor="borderColor"
      bg="borderColor"
      align="center"
      justify="center"
      rounded={rounded}
      _hover={{ bg: 'primary', borderColor: 'primary' }}
    >
      {isUploading ? (
        <Loader text="Carregando..." height="100px" />
      ) : (
        <Stack align="center" spacing={0}>
          <CloudUpload2 />
          <Text>{label}</Text>
        </Stack>
      )}
    </Stack>
  )
}

export default memo(UploadBox)
