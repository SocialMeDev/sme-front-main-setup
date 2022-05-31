import { memo } from 'react'
import { AvatarGroup } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function AvatarGroupDefault({
  size = useSizeValue('xs', 'sm', 'md'),
  children,
  ...rest
}) {
  return (
    <AvatarGroup size={size} {...rest}>
      {children}
    </AvatarGroup>
  )
}

export default memo(AvatarGroupDefault)
