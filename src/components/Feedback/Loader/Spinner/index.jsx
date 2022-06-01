import { memo } from 'react'
import { Spinner } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function SpinnerDefault({
  color = 'primary',
  size = useSizeValue('xs', 'sm', 'md'),
  children,
  ...rest
}) {
  return (
    <Spinner color={color} size={size} {...rest}>
      {children}
    </Spinner>
  )
}

export default memo(SpinnerDefault)
