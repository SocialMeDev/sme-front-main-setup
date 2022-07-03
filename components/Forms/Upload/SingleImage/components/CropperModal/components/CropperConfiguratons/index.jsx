import { memo, forwardRef, useState } from 'react'

import { Flex, Stack, Center, Image, Text, Button } from 'components'

import ZoomInOut from './components/ZoomInOut'
import Rotate from './components/Rotate'
import Reverse from './components/Reverse'
import Reset from './components/Reset'

const CropperConfiguratons = forwardRef(
  ({ rounded, cropper, src, onDownload, onUpload }, ref) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
      <Stack p={4} align="center" justify="space-between" spacing={0}>
        <Flex
          w="100%"
          direction="column"
          align="center"
          justify="center"
          gap={2}
        >
          <Text>Preview da imagem</Text>

          <Center
            mb={4}
            w="max-content"
            flexDirection="column"
            align="center"
            borderWidth="2px"
            borderColor="primary"
            bg="primary"
            rounded={rounded}
          >
            <Image
              rounded={rounded}
              ref={ref}
              src={src}
              alt="Preview da imagem"
            />
          </Center>

          <Reset cropper={cropper} />
          <ZoomInOut cropper={cropper} />
          <Rotate cropper={cropper} />
          <Reverse cropper={cropper} />
        </Flex>

        <Stack pt={4} w="100%" align="center" justify="center">
          <Button w="100%" onClick={onDownload}>
            Baixar
          </Button>
          <Button
            isLoading={isLoading}
            w="100%"
            variant="solid"
            onClick={async () => {
              setIsLoading(true)
              await onUpload()
              setIsLoading(false)
            }}
          >
            Salvar
          </Button>
        </Stack>
      </Stack>
    )
  }
)

export default memo(CropperConfiguratons)
