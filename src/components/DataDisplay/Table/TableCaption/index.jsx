import { memo } from 'react'
import { TableCaption } from '@chakra-ui/react'

function CustomTableCaption({ children, ...rest }) {
  return <TableCaption {...rest}>{children}</TableCaption>
}

export default memo(CustomTableCaption)
