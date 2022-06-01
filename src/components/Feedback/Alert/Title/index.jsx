import { memo } from 'react'
import { AlertTitle } from '@chakra-ui/react'

function AlertTitleDefault({ children, ...rest }) {
  return <AlertTitle {...rest}>{children}</AlertTitle>
}

export default memo(AlertTitleDefault)
