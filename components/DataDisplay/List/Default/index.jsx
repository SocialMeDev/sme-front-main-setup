import { memo } from 'react'
import { List } from '@chakra-ui/react'

function ListDefault({ children, ...rest }) {
  return (
    <List p={2} {...rest}>
      {children}
    </List>
  )
}

export default memo(ListDefault)
