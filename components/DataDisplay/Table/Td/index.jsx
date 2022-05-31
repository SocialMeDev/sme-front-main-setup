import { memo } from 'react'
import { Td } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function CustomTd({
  children,
  fontSize = useSizeValue('sm', 'md', 'lg'),
  ...rest
}) {
  return (
    <Td fontSize={fontSize} {...rest}>
      {children}
    </Td>
  )
}

export default memo(CustomTd)
