import { memo } from 'react'
import { FormErrorMessage } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function FormErrorMessageDefault({ size, children, ...rest }) {
  return (
    <FormErrorMessage
      fontSize={size || useSizeValue('sm', 'md', 'lg')}
      {...rest}
    >
      {children}
    </FormErrorMessage>
  )
}

export default memo(FormErrorMessageDefault)
