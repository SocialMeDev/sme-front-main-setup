import { memo } from 'react'
import { Tfoot } from '@chakra-ui/react'

function CustomTfoot({ children, ...rest }) {
  return <Tfoot {...rest}>{children}</Tfoot>
}

export default memo(CustomTfoot)
