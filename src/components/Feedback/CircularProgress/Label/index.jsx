import { memo } from 'react'
import { CircularProgressLabel } from '@chakra-ui/react'

function CircularProgressLabelDefault({ children, ...rest }) {
  return (
    <CircularProgressLabel bg="transparent" {...rest}>
      {children}
    </CircularProgressLabel>
  )
}

export default memo(CircularProgressLabelDefault)
