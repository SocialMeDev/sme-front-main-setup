import { memo, forwardRef } from 'react'
import { Button } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const ButtonDefault = forwardRef(
  (
    {
      type = 'button',
      children,
      variant = 'outline',
      size = useSizeValue('xs', 'sm', 'md'),
      ...rest
    },
    ref
  ) => {
    return (
      <Button type={type} ref={ref} variant={variant} size={size} {...rest}>
        {children}
      </Button>
    )
  }
)

export default memo(ButtonDefault)
