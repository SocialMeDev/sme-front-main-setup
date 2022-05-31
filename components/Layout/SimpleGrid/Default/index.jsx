import { memo } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

function SimpleGridDefault({ children, ...rest }) {
  return <SimpleGrid {...rest}>{children}</SimpleGrid>
}

export default memo(SimpleGridDefault)
