import { memo } from 'react'
import { FormLabel } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function FormLabelDefault({ children, size, ...rest }) {
  return (
    <FormLabel fontSize={size || useSizeValue('xs', 'sm', 'md')} {...rest}>
      {children}
    </FormLabel>
  )
}

export default memo(FormLabelDefault)
