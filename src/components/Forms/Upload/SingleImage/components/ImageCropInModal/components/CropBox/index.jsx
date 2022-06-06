import { memo, useRef } from 'react'

import { Flex, Stack, Image, Skeleton } from 'components'

import useCanvasCrop from '../../../../hooks/useCanvasCrop'

function ImageCropInModal({ imageURL }) {
  const imageRef = useRef()

  const { loadingImage } = useCanvasCrop({ imageURL, imageRef })

  return (
    <Stack p={4} align="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="relative"
      >
        <Skeleton isLoaded={!loadingImage}>
          <Image ref={imageRef} />
        </Skeleton>
      </Flex>
    </Stack>
  )
}

export default memo(ImageCropInModal)
