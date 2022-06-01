import { memo, forwardRef } from 'react'
import { Switch } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

const SwitchDefault = forwardRef(({ size, ...rest }, ref) => {
  return (
    <Switch ref={ref} size={size || useSizeValue('sm', 'md', 'lg')} {...rest} />
  )
})

export default memo(SwitchDefault)
