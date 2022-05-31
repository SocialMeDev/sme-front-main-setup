import { memo, forwardRef } from 'react'
import { Input } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const InputDefault = forwardRef(
  ({ size = useSizeValue('xs', 'sm', 'md'), type, ...rest }, ref) => {
    return <Input type={type} size={size} ref={ref} {...rest} />
  }
)

export default memo(InputDefault)
