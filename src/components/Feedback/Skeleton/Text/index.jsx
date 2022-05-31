import { memo } from 'react'
import { SkeletonText } from '@chakra-ui/react'

function SkeletonTextDefault({ children, ...rest }) {
  return <SkeletonText {...rest}>{children}</SkeletonText>
}

export default memo(SkeletonTextDefault)
