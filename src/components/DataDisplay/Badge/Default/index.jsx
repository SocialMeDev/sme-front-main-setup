import { memo } from 'react'
import { Badge } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function BadgeDefault({
  children,
  variant = 'outline',
  size = useSizeValue('xs', 'sm', 'md'),
  ...rest
}) {
  return (
    <Badge
      px={1}
      py={0.5}
      fontWeight="500"
      size={size}
      variant={variant}
      letterSpacing={1}
      {...rest}
    >
      {children}
    </Badge>
  )
}

export default memo(BadgeDefault)
