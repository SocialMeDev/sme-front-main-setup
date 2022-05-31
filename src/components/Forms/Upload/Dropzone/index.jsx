import { memo, Fragment, useState, useCallback } from 'react'

import { useFileManager } from 'components/Forms/Upload/FileManager/contexts/Provider'
import { Box, Center, Heading, Text, Stack } from 'components'
import { CloudUpload2 } from 'components/Icons/Interface'
import { useDebounce } from 'hooks'
import { getFormatedBytes } from 'utils/transforms/number'

function Dropzone() {
  const { acceptFiles, maxSize, isUploading, onChangeFile, onSearchFile } =
    useFileManager()

  const [fileEnterDropzone, setFileEnterDropzone] = useState(false)

  const onDropFile = useCallback((event) => {
    event.preventDefault()

    const file = event.dataTransfer.files[0]

    if (file) onChangeFile(file)

    setFileEnterDropzone(false)
  }, [])

  const dropOver = useCallback((event) => {
    event.preventDefault()
  }, [])

  const dragEnter = useCallback(() => {
    setFileEnterDropzone(true)
  }, [])

  const dragLeave = useCallback(() => {
    setFileEnterDropzone(false)
  }, [])

  const debouncedDragEnter = useDebounce(dragEnter, 200)

  const debouncedDragLeave = useDebounce(dragLeave, 200)

  return (
    <Fragment>
      {!isUploading && (
        <Center
          onDrop={onDropFile}
          onDragOver={dropOver}
          onDragEnter={debouncedDragEnter}
          onDragLeave={debouncedDragLeave}
          onClick={onSearchFile}
          width="100%"
          as="button"
          type="button"
          transition="all 0.4s"
          border="1px dashed"
          borderColor={fileEnterDropzone ? 'primary' : 'borderColor'}
          bg="bgContent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
        >
          <Stack
            px={4}
            justify="center"
            align="center"
            minHeight="10rem"
            rounded="md"
          >
            <CloudUpload2 boxSize={12} color={fileEnterDropzone && 'primary'} />
            <Heading textAlign="center" color={fileEnterDropzone && 'primary'}>
              {fileEnterDropzone
                ? 'Solte o arquivo'
                : 'Clique ou arraste um arquivo para enviar'}
            </Heading>
            <Box>
              <Text variant="secondary" textAlign="center">
                Tamanho máximo: {getFormatedBytes(maxSize)}
              </Text>
              <Text variant="secondary" textAlign="center">
                {acceptFiles.join(', ')}
              </Text>
            </Box>
          </Stack>
        </Center>
      )}
    </Fragment>
  )
}

export default memo(Dropzone)
