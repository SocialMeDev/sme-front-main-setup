import { memo } from 'react'
import { TableContainer } from '@chakra-ui/react'

function CustomTableContainer({ children, ...rest }) {
  return (
    <TableContainer whiteSpace={{ base: 'nowrap', md: 'normal' }} {...rest}>
      {children}
    </TableContainer>
  )
}

export default memo(CustomTableContainer)
