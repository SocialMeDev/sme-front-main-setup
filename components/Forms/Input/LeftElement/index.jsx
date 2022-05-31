import { memo, forwardRef } from 'react'

import { InputLeftElement } from '@chakra-ui/react'

const InputLeftElementDefault = forwardRef((props, ref) => {
  return <InputLeftElement {...props} ref={ref} />
})

export default memo(InputLeftElementDefault)
