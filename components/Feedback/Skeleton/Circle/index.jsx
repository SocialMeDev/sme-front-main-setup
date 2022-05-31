import { memo } from 'react'
import { SkeletonCircle } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function SkeletonCircleDefault({ children, ...rest }) {
  const size = useSizeValue('2rem', '4rem', '6rem')

  return (
    <SkeletonCircle size={size} {...rest}>
      {children}
    </SkeletonCircle>
  )
}

export default memo(SkeletonCircleDefault)
