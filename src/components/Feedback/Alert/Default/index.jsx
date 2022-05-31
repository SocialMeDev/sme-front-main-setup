import { memo } from 'react'
import { Alert } from '@chakra-ui/react'

function AlertDefault({ children, ...rest }) {
  return <Alert {...rest}>{children}</Alert>
}

export default memo(AlertDefault)
