import { forwardRef, memo } from 'react'
import { CheckboxGroup } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const CheckboxGroupDefault = forwardRef(
  ({ size = useSizeValue('sm', 'md', 'lg'), children, ...rest }, ref) => {
    return (
      <CheckboxGroup ref={ref} size={size} {...rest}>
        {children}
      </CheckboxGroup>
    )
  }
)

export default memo(CheckboxGroupDefault)
