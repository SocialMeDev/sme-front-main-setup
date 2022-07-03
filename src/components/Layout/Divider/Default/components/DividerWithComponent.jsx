import { memo } from 'react'

import { Box, Stack } from 'components'

function DividerWithComponent({ children, ...rest }) {
  return (
    <Stack py={2} direction="row" align="center" spacing={0} {...rest}>
      <Box w="100%" borderTop="1px" borderColor="borderColor" />
      {children && <Box px={2}>{children}</Box>}
      <Box w="100%" borderTop="1px" borderColor="borderColor" />
    </Stack>
  )
}

export default memo(DividerWithComponent)
