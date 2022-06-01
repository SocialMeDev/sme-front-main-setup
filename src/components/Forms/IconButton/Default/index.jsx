import { memo, forwardRef } from 'react'
import { IconButton } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const IconButtonDefault = forwardRef(
  ({ children, size = useSizeValue('xs', 'sm', 'md'), ...rest }, ref) => {
    return (
      <IconButton ref={ref} size={size} {...rest}>
        {children}
      </IconButton>
    )
  }
)

export default memo(IconButtonDefault)
