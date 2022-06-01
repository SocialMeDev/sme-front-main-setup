import { memo } from 'react'
import { Table } from '@chakra-ui/react'

function TableDefault({
  children,
  variant = 'unstyled',
  size = 'sm',
  ...rest
}) {
  return (
    <Table variant={variant} size={size} {...rest}>
      {children}
    </Table>
  )
}

export default memo(TableDefault)
