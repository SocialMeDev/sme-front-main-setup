import { memo, forwardRef } from 'react'

import { Center } from '@chakra-ui/react'

const CenterDefault = forwardRef((props, ref) => {
  return <Center {...props} ref={ref} />
})

export default memo(CenterDefault)
