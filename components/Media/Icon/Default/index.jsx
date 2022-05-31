import { memo, forwardRef } from 'react'
import { Icon } from '@chakra-ui/react'

import { sizes } from './styles'
import { useSizeValue } from 'hooks'

const IconDefault = forwardRef(
  ({ size = useSizeValue('sm', 'md', 'lg'), ...rest }, ref) => {
    return <Icon ref={ref} {...sizes[size]} {...rest} />
  }
)

export default memo(IconDefault)
