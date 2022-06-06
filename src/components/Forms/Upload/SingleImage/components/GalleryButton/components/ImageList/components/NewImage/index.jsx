import { memo, useRef, useState, useCallback } from 'react'

import { Stack, Text, Loader } from 'components'
import { useSizeValue } from 'hooks'
import { Plus } from 'components/Icons/Interface'

import onUploadProgressInClient from '../../../../../..//utils/onUploadProgressInClient'
import InputFile from '../../../../../InputFile'

function NewImage({ size, addImage }) {
  const [isUploading, setIsUploading] = useState(false)
  const inputRef = useRef()

  const onAddImage = useCallback(async (event) => {
    const file = event.target.files[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    onUploadProgressInClient(imageUrl, setIsUploading)

    await addImage(file)
  }, [])

  return (
    <InputFile ref={inputRef} onChange={onAddImage}>
      <Stack
        as="button"
        type="button"
        w={size}
        h={size}
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
            <Plus boxSize={useSizeValue(6, 8, 10)} />
            <Text>Nova imagem</Text>
          </Stack>
        )}
      </Stack>
    </InputFile>
  )
}

export default memo(NewImage)
