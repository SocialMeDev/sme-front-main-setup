import { memo } from 'react'
import { FormHelperText } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function FormHelperTextDefault({ children, size, ...rest }) {
  return (
    <FormHelperText fontSize={size || useSizeValue('xs', 'sm', 'md')} {...rest}>
      {children}
    </FormHelperText>
  )
}

export default memo(FormHelperTextDefault)
