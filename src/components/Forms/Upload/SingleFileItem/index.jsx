import { memo, Fragment } from 'react'

import {
  Button,
  Box,
  Heading,
  Text,
  Stack,
  Result,
  CircularProgress,
  CircularProgressLabel
} from 'components'

import { getFormatedBytes } from 'utils/transforms/number'
import { useFileManager } from 'components/Forms/Upload/FileManager/contexts/Provider'
import { DeleteDisabled2 } from 'components/Icons/Interface'

function SingleFileItem({
  makeAnotherUpload,
  cancelUpload,
  resultTitle = 'Arquivo enviado com sucesso',
  resultDescription
}) {
  const { files, isUploading, uploadProgress, setIsUploading } =
    useFileManager()

  const [item] = files

  return (
    <Fragment>
      {isUploading && (
        <Box>
          {uploadProgress === 100 ? (
            <Result
              mb={4}
              srcSize={120}
              title={resultTitle}
              description={resultDescription}
            >
              {makeAnotherUpload && (
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() => {
                    setIsUploading(false)
                    makeAnotherUpload()
                  }}
                >
                  Fazer outro upload
                </Button>
              )}
            </Result>
          ) : (
            <Stack align="center" justify="center">
              <CircularProgress
                size="8rem"
                value={uploadProgress}
                color="primary"
              >
                <CircularProgressLabel color="primary">
                  {uploadProgress}%
                </CircularProgressLabel>
              </CircularProgress>

              <Stack spacing={0} align="center">
                <Heading mb={2} color="primary">
                  Enviando o arquivo...
                </Heading>

                <Text textAlign="center">Arquivo: {item.file.name}</Text>
                <Text>Tamanho: {getFormatedBytes(item.file.size)}</Text>
              </Stack>

              {cancelUpload && (
                <Button
                  variant="solid"
                  leftIcon={<DeleteDisabled2 />}
                  onClick={() => {
                    cancelUpload()
                  }}
                >
                  Cancelar
                </Button>
              )}
            </Stack>
          )}
        </Box>
      )}
    </Fragment>
  )
}

export default memo(SingleFileItem)
