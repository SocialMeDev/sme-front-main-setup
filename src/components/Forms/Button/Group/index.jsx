import { memo, forwardRef } from 'react'
import { ButtonGroup } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const ButtonGroupDefault = forwardRef(
  ({ children, size = useSizeValue('xs', 'sm', 'md'), ...rest }, ref) => {
    return (
      <ButtonGroup size={size} ref={ref} {...rest}>
        {children}
      </ButtonGroup>
    )
  }
)

export default memo(ButtonGroupDefault)
