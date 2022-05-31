import { memo } from 'react'
import { Box } from 'components'

function Card({ children, ...rest }) {
  return (
    <Box
      p={4}
      rounded="md"
      borderWidth="1px"
      borderColor="borderColor"
      bg="bgContent"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default memo(Card)
