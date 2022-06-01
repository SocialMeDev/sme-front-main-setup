import { memo, forwardRef } from 'react'
import { Checkbox } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const CheckboxDefault = forwardRef(
  ({ children, size = useSizeValue('sm', 'md', 'lg'), ...rest }, ref) => {
    return (
      <Checkbox ref={ref} size={size} {...rest}>
        {children}
      </Checkbox>
    )
  }
)

export default memo(CheckboxDefault)
