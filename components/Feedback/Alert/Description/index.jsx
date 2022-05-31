import { memo } from 'react'
import { AlertDescription } from '@chakra-ui/react'

function AlertDescriptionDefault({ children, ...rest }) {
  return <AlertDescription {...rest}>{children}</AlertDescription>
}

export default memo(AlertDescriptionDefault)
