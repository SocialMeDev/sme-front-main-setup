import { memo } from 'react'

import { FormControl } from '@chakra-ui/react'

function FormControlDefault({ children, ...rest }) {
  return (
    <FormControl mb={4} {...rest}>
      {children}
    </FormControl>
  )
}

export default memo(FormControlDefault)
