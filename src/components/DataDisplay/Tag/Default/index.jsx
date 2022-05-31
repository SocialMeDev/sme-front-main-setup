import { memo } from 'react'
import { Tag, useColorModeValue } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function TagDefault({
  children,
  colorScheme,
  variant = 'solid',
  size = useSizeValue('sm', 'md', 'lg'),
  ...rest
}) {
  const bg = useColorModeValue('gray.100', 'gray.600')
  const color = useColorModeValue('#303030', 'gray.100')

  return (
    <Tag
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      {...(!colorScheme && {
        bg: bg,
        color: color
      })}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default memo(TagDefault)
