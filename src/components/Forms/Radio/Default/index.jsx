import { forwardRef, memo } from 'react'

import { Radio } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const RadioDefault = forwardRef(
  ({ size = useSizeValue('sm', 'md', 'lg'), ...rest }, ref) => {
    return <Radio ref={ref} size={size} {...rest} />
  }
)

export default memo(RadioDefault)
