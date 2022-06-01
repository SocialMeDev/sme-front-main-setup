import { memo } from 'react'
import { Avatar } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function AvatarDefault({
  size = useSizeValue('xs', 'sm', 'md'),
  children,
  ...rest
}) {
  return (
    <Avatar size={size} {...rest}>
      {children}
    </Avatar>
  )
}

export default memo(AvatarDefault)
