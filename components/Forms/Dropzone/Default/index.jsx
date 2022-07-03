import { memo, forwardRef } from 'react'
import { Textarea } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const TextareaDefault = forwardRef(({ size, type, variant, ...rest }, ref) => {
  return (
    <Textarea
      variant={variant}
      type={type}
      size={size || useSizeValue('xs', 'sm', 'md')}
      ref={ref}
      {...rest}
    />
  )
})

export default memo(TextareaDefault)
