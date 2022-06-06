import { memo, Fragment } from 'react'

import { Stack, Text, Image, Loader } from 'components'

import { CloudUpload2 } from 'components/Icons/Interface'

function UploadBox({ size, isUploading, imageURL, inputRef, label }) {
  return (
    <Stack
      as="button"
      type="button"
      w={size}
      h={size}
      onClick={() => inputRef.current.click()}
      border={imageURL ? '1px solid' : '1px dashed'}
      borderColor="borderColor"
      p={2}
      align="center"
      justify="center"
      _hover={{ borderColor: 'primary' }}
    >
      {!imageURL ? (
        <Stack align="center" spacing={0}>
          <CloudUpload2 />
          <Text>{label}</Text>
        </Stack>
      ) : (
        <Fragment>
          {isUploading ? (
            <Loader text="Carregando..." height="100px" />
          ) : (
            <Image src={imageURL} alt="Imagem dinâmica" />
          )}
        </Fragment>
      )}
    </Stack>
  )
}

export default memo(UploadBox)
