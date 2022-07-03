import { forwardRef, memo } from 'react'
import { Image } from '@chakra-ui/react'

const ImageDefault = forwardRef(({ ...rest }, ref) => {
  return <Image ref={ref} {...rest} />
})

export default memo(ImageDefault)
