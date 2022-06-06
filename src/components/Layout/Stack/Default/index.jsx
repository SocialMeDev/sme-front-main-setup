import { memo, forwardRef } from 'react'

import { Stack } from '@chakra-ui/react'

const StackDefault = forwardRef((props, ref) => {
  return <Stack ref={ref} {...props} />
})

export default memo(StackDefault)
