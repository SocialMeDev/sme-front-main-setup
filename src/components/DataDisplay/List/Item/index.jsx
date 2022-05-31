import { memo } from 'react'
import { ListItem } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function ListItemDefault({ children, size, ...rest }) {
  return (
    <ListItem fontSize={size || useSizeValue('xs', 'sm', 'md')} {...rest}>
      {children}
    </ListItem>
  )
}

export default memo(ListItemDefault)
