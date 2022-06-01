import { memo } from 'react'
import { TagLabel } from '@chakra-ui/react'

function TagLabelDefault({ children, ...rest }) {
  return <TagLabel {...rest}>{children}</TagLabel>
}

export default memo(TagLabelDefault)
