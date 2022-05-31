import { memo } from 'react'
import { TagRightIcon } from '@chakra-ui/react'

function TagRightIconDefault({ children, ...rest }) {
  return <TagRightIcon {...rest}>{children}</TagRightIcon>
}

export default memo(TagRightIconDefault)
