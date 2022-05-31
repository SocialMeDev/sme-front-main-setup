import { memo } from 'react'
import { Thead } from '@chakra-ui/react'

function CustomThead({ children, ...rest }) {
  return <Thead {...rest}>{children}</Thead>
}

export default memo(CustomThead)
