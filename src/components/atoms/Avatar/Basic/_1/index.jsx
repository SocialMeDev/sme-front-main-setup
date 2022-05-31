import { memo } from 'react'
import { Avatar, useStyleConfig } from '@chakra-ui/react'

function CustomAvatar({ src, size, variant, ...rest }) {
  const styles = useStyleConfig('CustomAvatar', { size, variant })

  return (
    <Avatar src={src} size={size} variant={variant} sx={styles} {...rest} />
  )
}

export default memo(CustomAvatar)
