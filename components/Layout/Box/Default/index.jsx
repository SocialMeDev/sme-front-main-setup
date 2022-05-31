import { memo, forwardRef } from 'react'

import { Box } from '@chakra-ui/react'

const BoxDefault = forwardRef((props, ref) => {
  return <Box ref={ref} {...props} />
})

export default memo(BoxDefault)
