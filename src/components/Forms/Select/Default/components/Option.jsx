import { memo } from 'react'

import { useSizeValue } from 'hooks'
import { Box, Text } from 'components'

function Option({ padding = useSizeValue(1, 1, 2), label, value, ...rest }) {
  return (
    <Box
      padding={padding}
      width="100%"
      textAlign="left"
      as="button"
      type="button"
      name={value}
      _hover={{ bg: 'primary', color: 'light' }}
      {...rest}
    >
      <Text>{label}</Text>
    </Box>
  )
}

export default memo(Option)
