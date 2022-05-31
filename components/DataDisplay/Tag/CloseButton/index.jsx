import { memo } from 'react'
import { TagCloseButton } from '@chakra-ui/react'

function TagCloseButtonDefault({ children, ...rest }) {
  return <TagCloseButton {...rest}>{children}</TagCloseButton>
}

export default memo(TagCloseButtonDefault)
