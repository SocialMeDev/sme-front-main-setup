import { memo, forwardRef } from 'react'

import { InputRightElement } from '@chakra-ui/react'

const InputRightElementDefault = forwardRef((props, ref) => {
  return <InputRightElement {...props} ref={ref} />
})

export default memo(InputRightElementDefault)
