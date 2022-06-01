import { memo } from 'react'
import { Badge } from '@chakra-ui/react'

import { variants } from './style'
import { useSizeValue } from 'hooks'

function BadgeDefault({
  children,
  variant = 'outline',
  size = useSizeValue('sm', 'md', 'lg'),
  ...rest
}) {
  return (
    <Badge
      px={1}
      py={0.5}
      fontWeight="500"
      border="none"
      size={size}
      {...variants[variant]}
      {...rest}
    >
      {children}
    </Badge>
  )
}

export default memo(BadgeDefault)
