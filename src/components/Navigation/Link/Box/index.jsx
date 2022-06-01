import { memo } from 'react'

import { LinkBox } from '@chakra-ui/react'

function LinkBoxDefault({ children, ...rest }) {
  return <LinkBox {...rest}>{children}</LinkBox>
}

export default memo(LinkBoxDefault)
