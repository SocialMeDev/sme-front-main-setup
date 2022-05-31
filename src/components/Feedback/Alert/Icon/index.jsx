import { memo } from 'react'
import { AlertIcon } from '@chakra-ui/react'

function AlertIconDefault({ children, ...rest }) {
  return <AlertIcon {...rest}>{children}</AlertIcon>
}

export default memo(AlertIconDefault)
