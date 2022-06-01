import { memo } from 'react'
import { Stack } from '@chakra-ui/react'

function StackDefault({ children, ...rest }) {
  return <Stack {...rest}>{children}</Stack>
}

export default memo(StackDefault)
