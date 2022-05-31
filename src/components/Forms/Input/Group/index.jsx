import { memo } from 'react'
import { InputGroup } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const InputGroupDefault = ({
  children,
  size = useSizeValue('xs', 'sm', 'md'),
  ...rest
}) => {
  return (
    <InputGroup size={size} {...rest}>
      {children}
    </InputGroup>
  )
}

export default memo(InputGroupDefault)
