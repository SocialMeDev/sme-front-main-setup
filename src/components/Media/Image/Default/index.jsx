import { memo } from 'react'
import { Image } from '@chakra-ui/react'

function ImageDefault({ ...rest }) {
  return <Image {...rest} />
}

export default memo(ImageDefault)
