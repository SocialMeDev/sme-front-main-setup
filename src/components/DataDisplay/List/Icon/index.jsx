import { memo } from 'react'
import { ListIcon } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function ListIconDefault({ children, size, ...rest }) {
  return (
    <ListIcon fontSize={size || useSizeValue('xs', 'sm', 'md')} {...rest}>
      {children}
    </ListIcon>
  )
}

export default memo(ListIconDefault)
