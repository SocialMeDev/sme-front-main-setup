import { memo, forwardRef } from 'react'
import { Input } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const NumberInputDefault = forwardRef(
  (
    { size = useSizeValue('xs', 'sm', 'md'), type = 'number', ...rest },
    ref
  ) => {
    return <Input type={type} size={size} ref={ref} {...rest} />
  }
)

export default memo(NumberInputDefault)
