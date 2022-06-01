import { memo } from 'react'
import { Tbody } from '@chakra-ui/react'

function CustomTbody({ children, ...rest }) {
  return <Tbody {...rest}>{children}</Tbody>
}

export default memo(CustomTbody)
