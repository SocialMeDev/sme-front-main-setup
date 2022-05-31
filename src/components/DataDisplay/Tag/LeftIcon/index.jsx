import { memo } from 'react'
import { TagLeftIcon } from '@chakra-ui/react'

function TagLeftIconDefault({ children, ...rest }) {
  return <TagLeftIcon {...rest}>{children}</TagLeftIcon>
}

export default memo(TagLeftIconDefault)
