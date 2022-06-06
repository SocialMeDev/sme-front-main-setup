import { memo, useRef } from 'react'

import { Stack, Text } from 'components'
import { useSizeValue } from 'hooks'
import { Plus } from 'components/Icons/Interface'

import InputFile from '../InputFile'

function NewImage({ size, label, createImage }) {
  const inputRef = useRef()

  return (
    <InputFile ref={inputRef} onChange={createImage}>
      <Stack
        as="button"
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
        <Stack align="center" spacing={0}>
          <Plus boxSize={useSizeValue(10, 12, 14)} />
          <Text>{label}</Text>
        </Stack>
      </Stack>
    </InputFile>
  )
}

export default memo(NewImage)
