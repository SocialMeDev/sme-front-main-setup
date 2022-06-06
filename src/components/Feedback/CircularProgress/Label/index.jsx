import { memo } from 'react'
import { CircularProgressLabel } from '@chakra-ui/react'

function CircularProgressLabelDefault({
  bg = 'light',
  maxWidth = '30px',
  children,
  ...rest
}) {
  return (
    <CircularProgressLabel maxWidth={maxWidth} bg={bg} {...rest}>
      {children}
    </CircularProgressLabel>
  )
}

export default memo(CircularProgressLabelDefault)
