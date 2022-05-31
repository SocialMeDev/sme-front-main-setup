import { memo } from 'react'
import { Th } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function CustomTh({
  children,
  fontSize = useSizeValue('xs', 'sm', 'md'),
  ...rest
}) {
  return (
    <Th
      letterSpacing={0}
      textAlign="start"
      borderTopWidth="1px"
      whiteSpace="nowrap"
      paddingTop="0.75rem"
      paddingBottom="0.75rem"
      lineHeight="1.25rem"
      fontSize={fontSize}
      color="#4A5568"
      borderColor="borderColor"
      background="bgContainer"
      textTransform="none"
      {...rest}
    >
      {children}
    </Th>
  )
}

export default memo(CustomTh)
