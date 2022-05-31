import { memo } from 'react'
import { Skeleton } from '@chakra-ui/react'

function SkeletonDefault({ children, ...rest }) {
  return <Skeleton {...rest}>{children}</Skeleton>
}

export default memo(SkeletonDefault)
