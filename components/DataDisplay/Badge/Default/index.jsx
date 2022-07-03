import { memo } from 'react'
import { Badge } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function BadgeDefault({
  children,
  colorScheme = 'green',
  variant = 'outline',
  size = useSizeValue('xs', 'sm', 'md'),
  ...rest
}) {
  return (
    <Badge
      px={1}
      py={0.5}
      size={size}
      variant={variant}
      fontWeight="500"
      colorScheme={colorScheme}
      letterSpacing={1}
      oapcity={1}
      {...rest}
    >
      {children}
    </Badge>
  )
}

export default memo(BadgeDefault)
