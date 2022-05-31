import { memo } from 'react'
import { Tr } from '@chakra-ui/react'

function CustomTr({ children, ...rest }) {
  return (
    <Tr borderBottom="1px solid" borderColor="bgContainer" {...rest}>
      {children}
    </Tr>
  )
}

export default memo(CustomTr)
