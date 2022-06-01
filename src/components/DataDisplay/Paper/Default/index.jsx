import { memo, forwardRef } from 'react'
import { Box } from 'components'

const Paper = forwardRef(({ children, ...rest }, ref) => {
  return (
    <Box p={4} bg="bgContent" rounded="md" boxShadow="md" ref={ref} {...rest}>
      {children}
    </Box>
  )
})

export default memo(Paper)
