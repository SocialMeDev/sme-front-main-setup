import { memo } from 'react'

import { Box, Text, Stack } from 'components'

function DividerWithText({ text, ...rest }) {
  return (
    <Stack my={4} direction="row" align="center" spacing={0} {...rest}>
      <Box w="50%" borderTop="1px" borderColor="borderColor" />
      {text && <Text px={2}>{text}</Text>}
      <Box w="50%" borderTop="1px" borderColor="borderColor" />
    </Stack>
  )
}

export default memo(DividerWithText)
